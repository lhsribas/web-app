import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import auth from './modules/auth'

export const CART_MODULE = 'cart'
export const PRODUCTS_MODULE = 'products'
export const AUTH_MODULE = 'auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        cart,
        products
    },
    state: {
        currentRoute: window.location.pathname,
        title: 'Partner Store Application'
    }
})

export default store