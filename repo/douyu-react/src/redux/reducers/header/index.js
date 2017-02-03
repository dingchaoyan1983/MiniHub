import {combineReducers} from 'redux';

import hot from './hot';
import onlineGame from './online-game';
import recommendation from './recommendation';

export default combineReducers({
    hot,
    onlineGame,
    recommendation
});
