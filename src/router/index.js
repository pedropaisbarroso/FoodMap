import Vue from 'vue'
import Router from 'vue-router'
import Rating from '../components/projects/rating/rating.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/rating',
      name: 'Rating',
      component: Rating
    }
  ]
})
