<template>
  <div class="container">
    <div class="row">
      <!-- Inicio Lista de Produtos -->
      <div id="available" class="col-4">
        <div>
          <h4 class="display-6">Available products list <button type="button" class="btn btn-link" @click="getAllProducts()">Atualizar</button></h4>
          <div v-if="productsError != null">
            <b-alert show variant="danger" dismissible fade>There was an error to update the product list!</b-alert>
          </div>
          <table v-if="products != null" class="table table-hover">
            <thead>
              <tr>
                <th>Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prod in products" :key="prod.id">
                <td>
                  
                  <h6>
                    <b>Name</b>
                  </h6>
                  <p>{{prod.name}}</p>
                  
                  <h6>
                    <b>SKU</b>
                  </h6>

                  <p>{{prod.sku}}</p>
                  
                  <h6>
                    <b>Price</b>
                  </h6>
                  <p>{{prod.coast}}</p>

                  <h6>
                    <b>Quantity</b>
                  </h6>
                  <p><input type="number" name="quantiry" size="8"  v-model="prod.quantity"/></p>

                </td>
                <td><button class="btn btn-primary btn-sm" @click="addProductToCart(prod)">Add</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Fim Lista de Produtos -->

      <!-- Inicio Cart-->
      <div id="selected" class="col-8">
        <h4 class="display-6">Shopping cart</h4>
        <div v-if="checkoutError != null">
          <b-alert show variant="danger" dismissible fade>There was an error to finalize the order!</b-alert>
        </div>
        <div v-if="cartItems.length">
          <table class="table table-hover border">
            <thead>
              <tr>
                <th>Details</th>
                <th>Price</th>
                <th>Sku</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prod in cartItems" :key="prod.id">
                <td>{{prod.name}}</td>
                <td>{{prod.coast}}</td>
                <td>{{prod.sku}}</td>
                <td>{{prod.quantity}}</td>
                <td><button class="btn btn-primary btn-sm" @click="removeProductFromCart(prod)">Remove</button></td>
              </tr>
            </tbody>
          </table> 
          <!-- Fim Cart-->

          <!-- table customer -->
          <table class="table table-hover border">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Document</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" name="name" v-model="cartItems.name"/>
                </td>
                <td>
                  <input type="email" name="email" v-model="cartItems.email"/>
                </td>
                <td>
                  <input type="text" name="document" v-model="cartItems.document"/>
                </td>
              </tr>
            </tbody>
          </table>

          <button class="btn btn-primary btn-sm" @click="checkout(cartItems)">Go to checkout</button>

        </div>
        <p v-else>
          No product has been added!
        </p>
      </div>
      <!-- Fim Cart-->

    </div>
  </div>
</template>

<script>
import { CART_MODULE, PRODUCTS_MODULE } from '../store'
import { CHECKOUT, ADD_PRODUCT_TO_CART, REMOVE_PROUDCT_FROM_CART } from '../store/actions/cart'
import { GET_ALL_PRODUCTS } from '../store/actions/products'
import { CART_ITEMS } from '../store/getters/cart'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      products: state => state.products.products,
      productsError: state => state.products.error,
      checkoutError: state => state.cart.error
    }),
    ...mapGetters(CART_MODULE, {
      cartItems: CART_ITEMS
    })
  },
  methods: {
    ...mapActions(CART_MODULE, [
      ADD_PRODUCT_TO_CART,
      REMOVE_PROUDCT_FROM_CART,
      CHECKOUT
    ]),
    ...mapActions(PRODUCTS_MODULE, [
      GET_ALL_PRODUCTS
    ])
  },
  created () {
    this.$store.dispatch(PRODUCTS_MODULE + '/' + GET_ALL_PRODUCTS)
  }
}
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

#available {
  overflow-y: scroll;
}

#selected {
    overflow-y: scroll;
}
</style>
