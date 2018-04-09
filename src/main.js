// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import * as Store from './store/index.js'
import Login from './components/Login'
import MainBody from './components/MainBody'
import Notes from './components/Notes'
import GoogleCloud from './components/GoogleCloud'
// import VisionAPI from "./components/VisionAPI";

Vue.config.productionTip = false

Vue.use(VueRouter)
var store = Store.store

const routes = [
  { path: '', name:'home', component:Login },
  { path: '/body', name:'main', component:MainBody },
  { path: '/notes', name: 'notes', component: Notes },
  { path: '/cloud', name: 'cloud', component: GoogleCloud },
  // { path: '/vision', name: 'vision', component: VisionAPI }
]
const router = new VueRouter(
  {
    routes
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
