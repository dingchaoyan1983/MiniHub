import Immutable from 'immutable';
import { splitPath } from '../../utils';


const initState = [];

export function loadFolders(splat) {
    const paths = splitPath(splat);
    const projectName = paths[0];
    const relatedPath = paths.slice(1);
    return {
        API_CALL: true,
        url: `/api/projects/${projectName}/folders`,
        data: {
            relatedPath: relatedPath
        },
        types: [,LOAD_SUCC,]
    }
}

const LOAD_SUCC = 'folder/load_succ';

export default function(state = Immutable.fromJS(initState), action) {
    switch(action.type) {
        case LOAD_SUCC:   
            state = state.clear();
            return state.concat(action.payload);
        default:
            return state;
    }
}
