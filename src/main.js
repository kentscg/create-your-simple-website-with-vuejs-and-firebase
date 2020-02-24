import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase/app'
import "firebase/analytics"
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(VueMeta)

var config = {
  apiKey: "AIzaSyDB8hVpnbxUJ1GmR0Mx5gKfNu8j6y04FNM",
  projectId: "my-website-fa3e5",
  appId: "1:747831360877:web:bd2682ce40f36469242e64",
  measurementId: "G-ZY3F5DL9HL"
};

firebase.initializeApp(config)
Vue.prototype.$analytics = firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')
