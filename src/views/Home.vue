<template>
  <div class="home">

    <ProductDescriptionDraw

    :product = "product"

    :active = "active.product_drawer"

    v-on:close_product_event="closeDescriptionProductDrawer()"
    
     />

    <div class="list-items">

      <ProductSummary

      v-for="product in items"

      :key = "product.id"

      :product = "product"

      v-on:view-product = "viewProduct($event)"
      
       />
         
    </div>
    
    </div>
 
</template>

<script>

import ProductSummary from "../components/ProductSummary.vue";

import ProductDescriptionDraw  from "../components/ProductDescriptionDraw.vue";

import items from "../data/items.js";

//import MenuIcon from "../assets/Icons/menuIcon.png";


export default {

  data() {
    return {
      
     items : items,
     product : null,
     active : {

       product_drawer : false

     },

     mobile: null,
     mobilenav: null,
     windowWidth: null,
  
    }
  },

  methods : {

    viewProduct(product){

      this.product = product;

      this.active.product_drawer = true

      console.log(product);

    },

    closeDescriptionProductDrawer(){

      this.active.product_drawer = false

    },

    checkScreen(){

      this.windowWidth = window.innerWidth;

      if(this.windowWidth < 750)
      {
        this.mobile = true;

        return;
      }

      this.mobile = false;
      this.mobilenav = false;
      return;
      
    },

    toggleMenuNav(){
      this.mobilenav = !this.mobilenav
    }


  },

  created() {
    
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },

  name: "Home",
  
  components: {

    ProductSummary, ProductDescriptionDraw
    
  },
};
</script>

<style lang="scss">

.list-items {

  display :flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  


}

  
</style>
