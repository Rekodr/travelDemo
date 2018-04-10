import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'

Vue.use(Vuex)

const state = {
  travellers: {},
  guides: {},
  newGuide: {},
  newTraveller: {},
  newRequestform: {},
  newPlan: {}
  /*
  user: {
    first_name: null,
    last_name: null,
    email: null,
    travel_request: {
      city_destination: null,
      city_origin: null,
      start_date: null,
      end_date: null,
      theme: null,
    }
  }
  */

}

const mutations = {
  addTraveller (state) {
    state.travellers.push(state.newTraveller)
  },
  addGuide (state) {
    state.guides.push(state.newGuide)
  },
  addPlan (state, userId) {
    state.travellers[userId].push(state.newPlan)
  },
  addRequest (state, travellerId, guideId, requestForm) {
    state.guides[guideId]['requestForm'] = requestForm
  }
}

const actions = {
  addTraveller: ({commit}) => commit('addTraveller'),
  addGuide: ({commit}) => commit('addGuide'),
  addRequest: ({commit}) => commit('addRequest'),
  addPlan: ({commit}) => commit('addPlan')
}

const getters = {
  getTravellerInfo (state, {id}) {
    return state.travellers[id]
  },
  getListGuides (state, {interest}) {
    var arrayGuide = []
    for (var i in state.guides) {
      if (i[interest] === interest) {
        arrayGuide.push(i)
      }
    }
    return arrayGuide
  }

}

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    example
  }
})

export default store
