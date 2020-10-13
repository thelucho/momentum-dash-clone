import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photoData: '',
    author: {
      name: '',
      profile_url: '',
    },
    errorMsg: false
  },
  getters: {
    getPhoto(state) {
      return state.photoData
    },
    getErrorMsg(state) {
      return state.errorMsg
    }
  },
  mutations: {
    setPhoto(state, response) {
      state.photoData = response.src.landscape
      state.errorMsg = false
    },
    setAuthor(state, response) {
      state.author.name = response.photographer
      state.author.profile_url = response.photographer_url
    },
    setErrorMsg(state) {
      state.errorMsg = true
    }
  },
  actions: {
    getPhoto(context, topic) {
      return new Promise((resolve, reject) => {
        API.get(`/search?query=${topic}&per_page=1`)
          .then((response) => {
            console.log("PHOTO: ", response.data.photos[0]);
            context.commit('setPhoto', response.data.photos[0])
            context.commit('setAuthor', response.data.photos[0])
            resolve(response.data.photos[0])
          })
          .catch((e) => {
            console.log(e);
            context.commit('setErrorMsg')
            reject(e);
          })
      })
    },
  }
})