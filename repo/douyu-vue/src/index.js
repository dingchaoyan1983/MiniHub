import Vue from 'vue';

import 'assets/css/base.css';
import 'assets/css/scss/index.scss';
import App from './app';
import router from './router';
import store from './store';

const ROOT = 'container';

window.vm = new Vue({
  router,
  store,
  el: `#${ROOT}`,
  render(h) {
    return <App/>;
  }
});
