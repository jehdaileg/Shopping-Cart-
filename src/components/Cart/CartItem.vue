<template>
    <div class="cart-item-card">

        <div class="header-product-in-cart">

            <div class="header-descript-cart">
                 <p class="image-view"><img v-bind:src="product.image" class="image-view"></p>
                 <h3>{{ product.name }}</h3>
                 <h4> In Cart : {{ product.quantity }}</h4>
            </div>
          
            <h4>Total Coast : ${{ items_total_coast.toFixed(2) }}</h4>

            <p>{{ description }}</p>
            
        </div>
        
    </div>
</template>

<script>
export default {

   props: ['product'],

    methods: {
        
    },

    computed: {

        description(){

            return this.product.description.substring(0,15)
        },

        items_total_coast(){

            return this.product.price * this.product.quantity 
        },

    },
    data() {
        return {
            
        }
    },
    
}
</script>

<style lang="scss" scoped>

.header-product-in-cart {

   border-radius: 5px;
   border: 1px solid gray;
   padding: 10px;
   box-shadow: 0 0 5px lightblue;
   width: 80%;
   margin: 5%;
    
    .header-descript-cart {

        display: flex;
        justify-content: space-around;
        
    }
    
}

.image-view {

    height: 50px;
    width: 50px;
}


</style>