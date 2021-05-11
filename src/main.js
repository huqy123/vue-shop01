import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import less from 'less'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
