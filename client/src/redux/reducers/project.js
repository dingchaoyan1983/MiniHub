import Immutable from 'immutable';

const initState = [];

export function loadProjects() {
    return {
        API_CALL: true,
        url: '/api/projects',
        types: [,LOAD_SUCC,]
    }
}

const LOAD_SUCC = 'projects/load_succ';

export default function(state = Immutable.fromJS(initState), action) {
    switch(action.type) {
        case LOAD_SUCC:   
            state = state.clear();
            return state.concat(action.payload);
        default:
            return state;
    }
}
