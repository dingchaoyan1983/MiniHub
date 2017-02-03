import {combineReducers} from 'redux';
import projects from './project';
import loadingSpinner from './loading-spinner';
import file from './file';

export default combineReducers({
    projects,
    loadingSpinner,
    file
});
