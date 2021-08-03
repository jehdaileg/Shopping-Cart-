<template>
    <div class="drawer-background" :class="{show: active}" @click="$emit('close_product_event')" >

        <div class="drawer" :class="{show: active}">

            <div class="drawer-close" @click="$emit('close_product_event')">
                X
            </div>
             <div class="product-details" v-if="product">

          <img v-bind:src="product.image" class="image-view" />
          <h3 class="text-center"> {{ product.name }}</h3>
          <p class="description"> {{ product.description }} </p>
          <h3 class="text-center">$ {{ product.price.toFixed(2) }}</h3>

          <div class="cart-total" v-if="product_total">
              <h3>In Cart</h3>
              <h4>{{ product_total }}</h4>
          </div>

          <div class="button-container">
              <button class="add" @click="addProductIntoCart()">Add</button>
              <button class="remove" @click="removeProductFromCart()">Remove</button>
          </div>

            </div>
        </div>

        
    </div>
</template>

<script>
export default {

    data() {
        return {
            
        }
    },
    methods: {
        addProductIntoCart(){
            
            return this.$store.commit('addProductIntoCart', this.product)
        },

        removeProductFromCart(){

            return this.$store.commit('removeProductFromCart', this.product)
        }
             
    },

    props : ['product', 'active'],

    computed : {

        product_total(){

            return this.$store.getters.QuantityProductInCart(this.product)
        }

    },

}
</script>

<style lang="scss">

.drawer-background {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(124, 124, 124, 0.55);
    z-index: 100;
    display: none;
    transition: display .5s;

    &.show {
        display: block;
    }
}

.drawer {
    width: 95vw;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: -105vw;
    padding: 15px;
    transition: left .5s;
    z-index: 101;
    overflow-y: scroll;

    &.show {
        left: 0;
    }
}

.drawer-close {
    font-size: 1rem;
    padding: 5px;
    border-radius: 5px;
    right: 10px;
    border: 2px gray solid;
    color: gray;
    width: 15px;
    float: right;
    cursor: pointer;

    &.hover {
        background-color: red;
    }
}

.drawer-close:hover {
    background-color: lightsalmon;
}

.product-details {
    display: flex;
    justify-content: center;
    flex-direction: column;

    p.description {
        padding: 20px;
        line-height: 1.5rem;
    }


    .button-container{

        button{
            width: 150px;
            border: none;
            padding: 10px;
            border-radius: 5px;
            margin: 0 5px 50px 5px;
            cursor: pointer;
        }
    }
}

@media (min-width: 500px) {

    .drawer {
        width: 450px;
    }
    
}

.image-view {

    height: 250px;
    width: 250px;
 
}
    
</style>