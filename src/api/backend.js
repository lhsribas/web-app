import Vue from 'vue'

export default {
    
    getAllProducts(cb, errorCb) {
        Vue.http.get('products/all').then(response => {
            cb(response.body)
        }, response => {
            errorCb(response.body)
        })
    },

    buyProducts(products, cb, errorCb) {
        var order = new Object();
        order.products = filterProduct(products);
        order.customer = filterCustomer(products);
        order.priority = 1;
        
        Vue.http.post('orders', order, { headers: {'Content-Type': 'application/json'}}).then(response => {
            cb(response.body)
        }, response => {
            errorCb(response.body)
        })
    }

}

function filterProduct(products){
    var arrayProduct = new Array();
    products.forEach(element => {
        var product = new Object();
        product.sku = element.sku;
        product.quantity = element.quantity;
        arrayProduct.push(product);
    });
    return arrayProduct;
}

function filterCustomer(products){
    var customer = new Object();
    customer.name = products.name;
    customer.email = products.email;
    customer.document = products.document;
    return customer;
}
