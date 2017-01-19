import Immutable from 'immutable';

const initState = {
    content: '',
    extname: '',
    history: ''
};

export function loadContent(project, relatedPath) {
    return {
        API_CALL: true,
        url: `/api/projects/${project}/file`,
        data: {
            relatedPath
        },
        types: [,LOAD_SUCC,]
    }
}

export function modifyContent(extname, code) {
    return {
        API_CALL: true,
        method: 'PUT',
        url: `/api/projects/projectId/folders/folderId/files/fileId`,
        data: {
            extname,
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

const LOAD_SUCC = 'file/load_succ';
const LOAD_HISTORY = 'file/load_history';

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
        default:
            return state;
    }
}
