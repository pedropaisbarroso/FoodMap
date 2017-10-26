import router from './router'
import { store } from './store/store'
import axios from 'axios'


Vue.use(ElementUI, { locale })
Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    store: store,
    template: '<App/>',
    components: { App },
    render: h => h(App)
})