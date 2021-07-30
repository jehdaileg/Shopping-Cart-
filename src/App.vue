<template>

  <div id="nav">
    <router-link to="/">Home</router-link>  
    <router-link to="/cart">Cart</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

  background-color: white;
  line-height: 30px;
  height: 30px;
  padding: 10px;
  width: 100%;


  a {

    font-size: 1.25rem;
    text-decoration: none;
    color: purple;
    margin: 0 5px 0 5px;
    font-weight: bold;


    &.active {
       color: pink;
      

    }

  

  }

 
}





</style>
