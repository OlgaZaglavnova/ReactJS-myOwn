import {addChat} from "./chatAction";
import {push} from 'connected-react-router';

export default store => next => action => {
    const {id, name} = action.payload;
    if (action.type === addChat.toString()){
        next(action);
        store.dispatch(push('/chats/' + action.payload.name));
    } else {
        next(action);
    };

};