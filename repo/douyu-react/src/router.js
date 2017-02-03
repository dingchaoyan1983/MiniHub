import React from 'react';
import { Router, Route, hashHistory, Redirect, IndexRedirect } from 'react-router';

export default function router(props) {
    return <Router history={hashHistory}>
             <Route path="/" getComponent={(nextState, cb) => {
                 require.ensure([], function() {
                        let App = require('./app').default
                        cb(null, App);
                 });
             }}>
                <IndexRedirect  to="all-lives"/>
                <Redirect path="index" to="all-lives"/>
                <Route path="all-lives" getComponent={(nextState, cb) => {
                    require.ensure([], function() {
                        let AllLives = require('./components/mainbody/all-lives').default
                        cb(null, AllLives);
                 });
                }}/>
                <Route path="all-categories" getComponent={(nextState, cb) => {
                    require.ensure([], function() {
                        let AllCategories = require('./components/mainbody/all-categories').default;
                        cb(null, AllCategories);
                    });
                }}/>
                <Route path="ranking-list" getComponent={(nextState, cb) => {
                    require.ensure([], function() {
                        let RankingList = require('./components/mainbody/ranking-list').default;
                        cb(null, RankingList);
                    });
                }}/>
                <Route path="my-focus" getComponent={(nextState, cb) => {
                    require.ensure([], function() {
                        let MyFocus = require('./components/mainbody/my-focus').default;
                        cb(null, MyFocus);
                    });
                }}/>
                <Route path="webgame-center" getComponent={(nextState, cb) => {
                    require.ensure([], function() {
                        let WebgameCenter = require('./components/mainbody/webgame-center').default;
                        cb(null, WebgameCenter);
                    });
                }}/>
             </Route>
          </Router>
}
