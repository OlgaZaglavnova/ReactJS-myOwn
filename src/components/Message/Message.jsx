import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Message.css';

/**
 * Компонент отрисовки Сообщения
 * @param {string} name Имя автора сообщения
 * @param {string} message Текст сообщения
 * @param {string} time Время отправки сообщения
 */
export const Message = ({msgClass, name, message, time}) => {
    const classNames = classnames('messageRow', {'messageRow--robot': msgClass==='robot'});
    return <div className={classNames}><strong>{name}: </strong>{message} <span className="messageTime"> {time}</span></div>;
};

//let classStr = "messageRow " + this.props.msgClass;

Message.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};