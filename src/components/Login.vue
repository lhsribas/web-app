<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="list-group">
            <button class="list-group-item list-group-item-action active" @click="login(callback)">Login with Single Sign-On</button>
            <router-link class="list-group-item list-group-item-action" to="/">Cancel</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { AUTH_MODULE } from '../store'
import { LOGIN } from '../store/actions/auth'
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(AUTH_MODULE, {
      login: LOGIN
    }),
    callback(status) {
    }
  }
}
</script>

<style>

</style>
