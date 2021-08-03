<template>
    <div>

        <h5>Card Section -- Your products in cart </h5>

        <div class="list-products-in-cart">

              <CartItem

              v-for="product in items"

             :key = "product.id" 

             :product = "product"
       
       />

        </div>
        
    </div>
</template>

<script>

import CartItem from "../components/Cart/CartItem.vue";

export default {

    computed: {
         
         items(){
             
             return this.$store.getters.cartItemsContent
         }
    },

    components: {

        CartItem
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