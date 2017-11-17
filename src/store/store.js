import Vue from 'vue';
import Vuex from 'vuex';
import { Message } from 'element-ui';
import { RatingModule } from './modules/rating'
import { CadastroModule } from './modules/cadastro'


Vue.use(Vuex);

export const store = new Vuex.Store({
  state() {
    return {
      locale: 'en',
      baseUrl: 'http://localhost:54918/api/'
    }
  },
  getters: {
    pageContent(state) {
      return content => {
        return content;
      }
    }
  },
  modules: {
    rating: RatingModule,
    cadastro: CadastroModule
  }
})



export function notificationMessage(typeMessage, message){
  if(typeMessage === 'success')
    Message.success({message: message})
  else
    Message.error({message: message})
}