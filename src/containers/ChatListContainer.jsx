import React from 'react';
import {ChatList} from '../components/ChatList/ChatList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {switchToAdd, switchPage} from "../store/chatAction";

//class ChatListContainer extends Component {}

const mapStateToProps=({chatReducer})=>{
    return {
        chats: chatReducer.chats,
    };
};

const mapDispatchToProps=(dispatch)=>{
    //return {}
    return bindActionCreators({switchToAdd, switchPage}, dispatch);
};

const mergeProps =(stateProps, dispatchProps) => {
    //const {id} = props;

    return {
        ...stateProps,
        switchToAdd: () => dispatchProps.switchToAdd(),
        handleSwitchPage:({linkStr}) => {
            console.log("ChatListContainer mergeProps: linkStr = ", linkStr);
            return dispatchProps.switchPage(linkStr)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);