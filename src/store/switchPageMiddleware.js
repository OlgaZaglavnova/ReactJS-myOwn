import {switchPage} from "./chatAction";
import {push} from 'connected-react-router';

export default store => next => action => {
    const {linkStr} = action.payload;
    if (action.type === switchPage.toString()){
        next(action);
        store.dispatch(push(linkStr));
    } else {
        next(action);
    };

};