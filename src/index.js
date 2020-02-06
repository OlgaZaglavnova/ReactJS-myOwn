import React from 'react';
import ReactDom from 'react-dom';
import Layout from './containers/Layout/Layout';
import {loadChats} from './store/chatAction';

import {Provider} from 'react-redux';
import {initStore} from './store/store';

const store=initStore();
store.dispatch(loadChats());

ReactDom.render(
    <Provider store={store}>
        <Layout />
    </Provider>, document.getElementById('root'));