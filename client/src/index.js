/**
 * application entry point.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/classList-polyfill';
import '../assets/index.scss';
import Router from './router';
//bootup websocket
import './socket';

const ROOT= 'container';


// if (process.env.NODE_ENV === 'development') {
//     require('./mock');
// }

ReactDOM.render(<Router/>, document.getElementById(ROOT));
