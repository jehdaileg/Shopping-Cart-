import { createStore } from "vuex";

//function  to update and stock a product object in cart in localStorage 
function updateLocalStorage(cart)
{
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default createStore({
  state: {
    cart : [],

  },

  getters: {

    QuantityProductInCart: state => product => {

      const item = state.cart.find(i => i.id == product.id)

      if(item) return item.quantity
      else return null 

    },

    cartItemsContent : state => {

      return state.cart 
      
    }

  },
  mutations: {

    addProductIntoCart(state, product){

      let item = state.cart.find(i => i.id == product.id)

      if(item)
      {
         item.quantity++
      }
      else
      {
         state.cart.push({...product, quantity:1})
      }

      updateLocalStorage(state.cart)

    },

    removeProductFromCart(state, product)
    {
      let item = state.cart.find(i => i.id == product.id)

      if(item.quantity > 1)
      {
        item.quantity--

      } 
      else 
      {
        state.cart = state.cart.filter(i => i.id != product.id)

      }
      updateLocalStorage(state.cart)

    },

    updateCartFromLocalStorage(state)
    {
      const cart = localStorage.getItem('cart')

      if(cart)
      {
        state.cart = JSON.parse(cart)
      }
    }

  },
  actions: {

  },
  modules: {

  },
});
