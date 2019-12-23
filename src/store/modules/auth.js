import Vue from 'vue'
import { LOGIN, LOGOUT } from '../actions/auth'
import { GET_TOKEN, IS_LOGGED_IN } from '../getters/auth'
import Keycloak from '../../external/keycloak'
import keycloak_conf from '../../external/keycloak.json'

//Mutations
const SET_TOKEN = 'setToken'

const clientID = 'f44ab538'

const keycloak = new Keycloak(keycloak_conf)

const state = {
  token: keycloak.token,
  loggedIn: !!keycloak.token,
  resourceRoles: keycloak.resourceRoles,
  realmRoles: keycloak.realmRoles
}

const getters = {
  [GET_TOKEN]: (state) => {
    return state.loggedIn ? state.token : null
  },

  [IS_LOGGED_IN]: (state) => {
    return state.loggedIn
  }
}

const actions = {
    [LOGIN]: ({state, commit}, cb) => {
      commit(SET_TOKEN, null, null, null)

      keycloak.init({ onLoad: 'login-required' }).success(function(authenticated) {
        console.log(authenticated ? 'authenticated' : 'not authenticated');
        console.log(keycloak.tokenParsed);

        let resourceRoles = keycloak.tokenParsed.resource_access[clientID] ? keycloak.tokenParsed.resource_access[clientID].roles : null
        let realmRoles = keycloak.tokenParsed.realm_access ? keycloak.tokenParsed.realm_access.roles : null

        console.log('keycloak.resourceRoles=' + resourceRoles)
        console.log('keycloak.realmRoles=' + realmRoles)

        commit(SET_TOKEN, keycloak.token, 
            resourceRoles, 
            realmRoles)

        cb("success")
      }).error(function(error) {
        console.error(error)
        
        cb("failed")
      })
    },

    [LOGOUT]: ({ state, commit }) => {
      keycloak.logout(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+"/")

      commit(SET_TOKEN, null, null, null)
    }
}

const mutations = {
  [SET_TOKEN]: (state, token, resourceRoles, realmRoles) => {
    state.token = token
    state.loggedIn = !!token
    state.resourceRoles = resourceRoles
    state.realmRoles = realmRoles
    Vue.http.headers.common['Authorization'] = 'Bearer ' + state.token
  }
}

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}