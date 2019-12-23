import { GET_ALL_PRODUCTS } from '../actions/products'
import backend from '../../api/backend'

// Mutations
const SET_PRODUCTS = 'setProducts'
const SET_ERROR = 'setError'

const state = {
    products: [],
    error: null
}

const getters = {
}

const actions = {
    [GET_ALL_PRODUCTS]: ({ commit }) => {
        commit(SET_ERROR, null)
        commit(SET_PRODUCTS, null)
        
        backend.getAllProducts(products => {
            commit(SET_PRODUCTS, products)
        }, error => {
            commit(SET_ERROR, error)
        })
    }
}

const mutations = {
    [SET_PRODUCTS]: (state, products) => {
        state.products = products
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