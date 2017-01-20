import Immutable from 'immutable';
import { splitPath } from '../../utils';

const initState = {
    content: '',
    extname: '',
    history: ''
};

export function loadContent(splat) {
    const paths = splitPath(splat);
    const projectName = paths[0];
    const relatedPath = paths.slice(1);

    return {
        API_CALL: true,
        url: `/api/projects/${projectName}/file`,
        data: {
            relatedPath
        },
        types: [,LOAD_SUCC,]
    }
}

export function modifyContent(splat, code) {
    const paths = splitPath(splat);
    const projectName = paths[0];
    const relatedPath = paths.slice(1);
    console.log(splat, relatedPath);
    return {
        API_CALL: true,
        method: 'PUT',
        url: `/api/projects/${projectName}/file`,
        data: {
            relatedPath: relatedPath.join(','),
            code
        },
        types: [,LOAD_SUCC,]
    }
}

export function loadHistory(extname) {
    return {
        API_CALL: true,
        url: `/api/file/history`,
        data: { extname },
        types: [,LOAD_HISTORY,]
    }
}

export function syncRedux(latestCode = '') {
    return {
        type: SYNC_REDUX,
        latestCode
    }
}

const LOAD_SUCC = 'file/load_succ';
const LOAD_HISTORY = 'file/load_history';
const SYNC_REDUX = 'file/sync_redux';

export default function(state = Immutable.fromJS(initState), action) {
    switch(action.type) {
        case LOAD_SUCC:   
            state = state.set('content', '');
            return state.withMutations(function (state) {
                        state.set('content', action.payload.code);
                        state.set('extname', action.payload.extname);
                        return state;
                   });
        case LOAD_HISTORY:
            return state.set('history', action.payload.code);
        case SYNC_REDUX:
            return state.set('content', action.latestCode);
        default:
            return state;
    }
}
