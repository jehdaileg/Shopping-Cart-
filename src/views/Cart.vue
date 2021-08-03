<template>
    <div>

        <h5>Card Section -- Your products in cart </h5>

        <div class="list-products-in-cart">

              <CartItem

              v-for="product in products"

             :key = "product.id" 

             :product = "product"
       
       />

       <PayementCartView
        :products = "products"
        />

        </div>
        
    </div>
</template>

<script>

import CartItem from "../components/Cart/CartItem.vue";

import PayementCartView from "../components/Cart/PayementCartView.vue";


export default {

    computed: {
         
         products(){
             
             return this.$store.getters.cartItemsContent
         }
    },

    components: {

        CartItem,  PayementCartView, 
    }
    
}
</script>

<style lang="scss">

.list-products-in-cart{

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: lightyellow;
    flex-wrap: wrap;
}


    
</style>