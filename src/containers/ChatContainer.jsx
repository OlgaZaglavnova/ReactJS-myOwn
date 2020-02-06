import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ChatPage} from '../components/ChatPage/ChatPage';
import {bindActionCreators} from 'redux';
import {addMessage, loadChats} from '../store/chatAction';
import {connect} from 'react-redux';

const getCurrentTime=()=>{
    const currDate=new Date();
    return currDate.toTimeString().slice(0,8);
};

//class ChatContainer extends Component {}
const mapStateToProps=({chatReducer}, props)=>{

    const {id} = props;
    return {
        //chat: id ? chatReducer.chats ? chatReducer.chats[id] : null : null
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
        userName: id ? chatReducer.chats[id] ? chatReducer.chats[id].name : null : null,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadChats, addMessage}, dispatch);
};

const mergeProps =(stateProps, dispatchProps, props) => {
    const {id} = props;
    return {
        ...stateProps,
        onSubmitMessage: ({msgClass, name, message, time}) => dispatchProps.addMessage(id, msgClass, name, message, getCurrentTime(), ""),
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatPage);
