import {combineReducers} from 'redux';
import projects from './project';
import folders from './folder';
import loadingSpinner from './loading-spinner';
import file from './file';

export default combineReducers({
    projects,
    folders,
    loadingSpinner,
    file
});
