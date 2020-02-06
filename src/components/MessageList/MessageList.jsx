import React from 'react';
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';

/**
 * Компонент отрисовки всех сообщений
 * @param {array} messages Массив сообщений, каждое сообщение - объект {имя автора, текст, время}
 */
export const MessageList =({messages}) => {
    return (messages.map((message, index) => <Message {...message} key={index} />));
};

MessageList.propTypes={    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))};