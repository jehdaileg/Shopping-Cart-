import { createStore } from "vuex";

//function  to update and stock a product object in cart in localStorage 

function updateLocalStorage(cart)
{
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default createStore({
  state: {

    cart: [],


  },

  getters: {

    productQuantity : state => product => {

      const item = state.cart.find(i => i.id === product.id);

      if(item) return item.quantity

      else return null 

    },


  },
  mutations: {

    

  },
  actions: {

  },
  modules: {

  },
});
