import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import store from './store/index'
Vue.config.productionTip = false
Vue.use(ElementUI)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
