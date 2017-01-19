import Immutable from 'immutable';
import { SHOW_LOADING_SPINNER, HIDE_LOADING_SPINNER } from '../../constants';

const initState = {
    shown: false
}

export default function(state = Immutable.fromJS(initState), action) {
    switch(action.type) {
        case SHOW_LOADING_SPINNER:   
            return state.set('shown', true);
        case HIDE_LOADING_SPINNER:
            return state.set('shown', false);
        default:
            return state;
    }
}
