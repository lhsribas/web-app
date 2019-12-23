import { CHECKOUT, ADD_PRODUCT_TO_CART, REMOVE_PROUDCT_FROM_CART } from '../actions/cart'
import { CART_ITEMS } from '../getters/cart'
import backend from '../../api/backend'

// Mutations
const INCRREMENT_QUANTITY = 'incrementQuantity'
const REMOVE_PRODUCT_FROM_CART = 'removeProductFromCart'
const SET_CART_ITEMS = 'setCartItems'
const SET_CHECKOUT_STATUS = 'setCheckoutStatus'
const SUCCESS = 'success'
const FAILED = 'failed'
const SET_ERROR = 'setError'

const state = {
    cart: [],
    checkoutStatus: null,
    error: null
}

const getters = {
    [CART_ITEMS]: (state, getters, rootState) => {
        return state.cart.map(({id}) => {
            const product = rootState.products.products.find(p => p.id === id)
            return {
                name: product.name,
                coast: product.coast,
                sku: product.sku,
                quantity: product.quantity
            }
        })
    }
}

const actions = {

    [CHECKOUT]: ({ commit, state }, products) => {
        commit(SET_ERROR, null)
        commit(SET_CHECKOUT_STATUS, null)

        backend.buyProducts(products, success => {
            commit(SET_CART_ITEMS, [])
            commit(SET_CHECKOUT_STATUS, SUCCESS)
        }, error => {
            commit(SET_ERROR, error)
            commit(SET_CHECKOUT_STATUS, FAILED)
        })
    },

    [ADD_PRODUCT_TO_CART]: ({ commit, state }, product) => {
        let index = state.cart.findIndex(i => i.id === product.id)
        
        if (index >= 0) {
            commit(INCRREMENT_QUANTITY, product)
        } else {
            commit(ADD_PRODUCT_TO_CART, { id: product.id, price: product.coast, sku: product.sku })
        }
    },

    [REMOVE_PROUDCT_FROM_CART]: ( {commit, state }, product) => {
        commit(REMOVE_PRODUCT_FROM_CART, { id: product.id })
    }
}

const mutations = {
    [ADD_PRODUCT_TO_CART]: (state, { id, coast }) => {
        state.cart.push({id, coast})
    },

    [INCRREMENT_QUANTITY]: (state, { id, coast }) => {
        const item = state.cart.find(i => i.id === id)
        item.coast += coast
    },

    [REMOVE_PRODUCT_FROM_CART]: (state, { id }) => {
        const index = state.cart.findIndex(i => i.id === id)
        state.cart.splice(index, 1);
    },

    [SET_CART_ITEMS]: (state, items) => {
        state.cart = items
    },

    [SET_CHECKOUT_STATUS]: (state, status) => {
        state.checkoutStatus = status
    },

    [SET_ERROR]: (state, error) => {
        state.error = error
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}