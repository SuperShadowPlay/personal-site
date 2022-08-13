import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'

const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')

Vue.use(VueMeta);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  vuetify,
  router,
  template: '<App />',
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')
