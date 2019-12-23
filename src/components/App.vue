<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">{{ title }}</span>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/store" class="nav-link">Store</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/login" v-if="!loggedIn" class="nav-link">Login</router-link>
          <a href="#" v-if="loggedIn" class="nav-link" @click="logout()">Logout</a>
        </li>
      </ul>
    </nav>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import { AUTH_MODULE } from '../store'
import { IS_LOGGED_IN } from '../store/getters/auth'
import { LOGIN, LOGOUT } from '../store/actions/auth'
import { mapState, mapGetters, mapActions } from 'vuex'
import router from '../router'

export default {
  name: 'app',
  computed: {
    ...mapState({
      title: state => state.title,
      route: state => state.route
    }),
    ...mapGetters(AUTH_MODULE, {
      loggedIn: IS_LOGGED_IN
    })
  },
  methods: {
    ...mapActions(AUTH_MODULE, {
      login: LOGIN,
      logout: LOGOUT
    })
  },
  created () {
    if (this.loggedIn || this.route.hash) {
      this.login(function(status) {
        router.push({path: '/store'})
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding-top: 30px;
}

.title {
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
