// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import '../theme/index.css'
import './components/global.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'
import { store } from './store/store'
import moment from 'moment'
import axios from 'axios'


export const BusEventApp = new Vue();

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
  return moment(value).format('MM/DD/YYYY hh:mm');
})

Vue.filter('precision', function (value, decimalPlaces) {
  return value.toFixed(decimalPlaces)
})

new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})