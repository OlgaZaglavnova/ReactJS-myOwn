import {createActions} from 'redux-actions';

export const {loadChats, addMessage, addChat, switchToAdd, changeClass, switchPage} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, msgClass, name, message, time) => ({id, msgClass, name, message, time}),
    ADD_CHAT: (name, messages, userAvatar) => ({name, messages, userAvatar}),
    SWITCH_TO_ADD: () => ({}),
    CHANGE_CLASS: (id, newClassName) =>({id, newClassName}),
    SWITCH_PAGE: (linkStr) => ({linkStr}),
});