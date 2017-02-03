import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import 'assets/css/base.css';
import 'assets/css/scss/index.scss';
import Router from './router';
import rootReducer from './redux';

//boot up redux
const store = createStore(rootReducer);
const ROOT = 'container';

ReactDOM.render(<Provider store={store}>
                    <Router/>
                </Provider>, document.getElementById(ROOT));
                