import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const AllLives = (resolve) => require(['./components/mainbody/all-lives'], (component)=> resolve(component.default));
const AllCategories = (resolve) => require(['./components/mainbody/all-categories'], (component)=> resolve(component.default));
const RankingList = (resolve) => require(['./components/mainbody/ranking-list'], (component)=> resolve(component.default));
const MyFocus = (resolve) => require(['./components/mainbody/my-focus'], (component)=> resolve(component.default));
const WebgameCenter = (resolve) => require(['./components/mainbody/webgame-center'], (component)=> resolve(component.default));


export default  new VueRouter({
  routes:[
    {path: '/index', redirect: '/all-lives'},
    {path: '/', redirect: '/all-lives'},
    {path: '/all-lives', component: AllLives},
    {path: '/all-categories', component: AllCategories},
    {path: '/ranking-list', component: RankingList},
    {path: '/my-focus', component: MyFocus},
    {path: '/webgame-center', component: WebgameCenter}
  ]
});