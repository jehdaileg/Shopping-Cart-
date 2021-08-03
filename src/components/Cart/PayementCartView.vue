<template>
    <div class="cart-total">

        <h4>Cart Total : ${{ cart_total.toFixed(2) }}</h4>

        <button class="btn-view-product-in-cart">Pay the product by card</button>
    </div>
</template>

<script>
export default {

     props: ['products'],

    computed: {

        cart_total(){
            
            return this.$store.getters.cartTotal
        }

    },

    data(){

        return {

        }
    },

    methods: {
        
    },

   
}
</script>