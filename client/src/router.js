/**
 * Router configrations
 */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import apiMiddleware from './redux/api-middleware';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';

// import App from './app';
// import MainBody from './components/container/main-body';
// import Projects from './components/container/projects';

import { loadFolders } from './redux/reducers/folder';
import { loadContent } from './redux/reducers/file';
import { loadProjects } from './redux/reducers/project';

import { isFile } from './utils';

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
const {dispatch} = store;

export default function(props) {
    return <Provider store={store}>
                <Router history={ hashHistory }>
                    <Route path="/" getComponent = {(nextState, cb) => {
                        require.ensure([], () => {
                            let App = require('./app').default;
                            cb(null, App);
                        }) 
                    }}>
                        <Route path="*" getComponent={(nextState, cb) => {
                            require.ensure([], () => {
                                let MainBody = require('./components/container/main-body').default;
                                cb(null, MainBody);
                            })
                        }} onEnter={({params: {splat=''}}={}) => {
                            if(isFile(splat)) {
                                dispatch(loadContent(splat));
                            } else {
                                dispatch(loadFolders(splat));
                            }
                        }}/>
                        <IndexRoute getComponent={ (nextState, cb) => {
                            require.ensure([], () => {
                                let Projects = require('./components/container/projects').default;
                                cb(null, Projects);
                            })
                        } } onEnter = {() => dispatch(loadProjects())}/>
                    </Route>
                </Router>
            </Provider>
}
