import {combineReducers} from 'redux';

import columnBoards from './column-boards';
import discoveryBoards from './discovery-boards';

export default combineReducers({
    columnBoards,
    discoveryBoards
});
