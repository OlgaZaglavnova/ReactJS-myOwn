import {handleActions} from 'redux-actions';
import {loadChats, addMessage, addChat, switchToAdd, changeClass, switchPage} from './chatAction';

const defaultState={
    chats: {}
};

const avatarsPath = '/src/components/ChatList/img/';
const robotClass = 'robot';

const getCurrentTime = () => {
    const currDate=new Date();
    return currDate.toTimeString().slice(0,8);
};

export default handleActions({
    [loadChats]:(state)=>{
        return {...state, 
            chats: {
                'John': {
                    name: 'John',
                    messages: [{msgClass: robotClass, name:'Робот', message:'Привет, John! Как дела?', time: getCurrentTime()}],
                    userAvatar: avatarsPath + 'chatList_icon1.png',
                    botAnswers: ''
                },
                'David': {
                    name: 'David',
                    messages: [{msgClass: robotClass, name:'Робот', message:'Привет, David! Как дела?', time: getCurrentTime()}],
                    userAvatar: avatarsPath + 'chatList_icon2.png',
                    botAnswers: ''
                },
                'Cindy': {
                    name: 'Cindy',
                    messages: [{msgClass: robotClass, name:'Робот', message:'Привет, Cindy! Как дела?', time: getCurrentTime()}],
                    userAvatar: avatarsPath + 'chatList_icon3.png',
                    botAnswers: ''
                },
                'Julia': {
                    name: 'Julia',
                    messages: [{msgClass: robotClass, name:'Робот', message:'Привет, Julia! Как дела?', time: getCurrentTime()}],
                    userAvatar: avatarsPath + 'chatList_icon4.png',
                    botAnswers: ''
                },
                'Allan': {
                    name: 'Allan',
                    messages: [{msgClass: robotClass, name:'Робот', message:'Привет, Allan! Как дела?', time: getCurrentTime()}],
                    userAvatar: avatarsPath + 'chatList_icon5.png',
                    botAnswers: ''
                },
            }
        };
    },
    [addMessage]: (state, {payload: {id, msgClass, name, message, time, botAnswers}})=> {
        // const time = getCurrentTime();
        return {
            ...state,
            chats:
                {
                    ...state.chats,
                    [id]: {
                        name: state.chats[id].name,
                        messages: [...state.chats[id].messages, {msgClass, name, message, time}],
                        userAvatar: state.chats[id].userAvatar,
                        botAnswers: botAnswers
                    }
                }
        };
    },
    [addChat]: (state, {payload: { name, messages, userAvatar}})=> {
        return {
            ...state,
            chats:
                {
                    ...state.chats,
                    [name]: {
                        name,
                        messages,
                        userAvatar,
                        botAnswers: ""
                    }
                }
        };
    },
    [switchToAdd]: (state) => {
        return {
            ...state
        }
    },
    [changeClass]: (state, {payload: {id, newClassName}}) => {
        return {
            ...state,
            chats:
                {
                    ...state.chats,
                    [id]: {
                        name: state.chats[id].name,
                        messages: [...state.chats[id].messages],
                        userAvatar: state.chats[id].userAvatar,
                        botAnswers: newClassName
                    }
                }
        };
    },
    [switchPage]: (state, {payload:{linkStr}}) => {
        console.log("chatReducer switchPage link=", linkStr)
        return {
            ...state
        }
    },
}, defaultState);