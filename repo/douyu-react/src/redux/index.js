import {combineReducers} from 'redux';

import sidebar from './reducers/sidebar';
import header from './reducers/header';

export default combineReducers({
    header,
    sidebar
});