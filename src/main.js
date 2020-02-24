import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase/app'
import "firebase/analytics"
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(VueMeta)

var config = {
  apiKey: "",
  projectId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(config)
Vue.prototype.$analytics = firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')
