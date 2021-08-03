<template>
    <div>

        <div class="card">

            <img v-bind:src="product.image" class="image-view">

            <h3>{{product.name}}</h3>
            <h5 class="price">Price $ : {{product.price.toFixed(2)}}</h5>
            <p class="text-muted">Category : {{product.category}}</p>
            <p class="description">Description: {{description}}</p>

            <button class="btn-view-product-in-cart" @click="$emit('view-product', product)">View</button>

        </div>
        
    </div>
</template>

<script>
export default {

    props : {

        product : Object

    },
    computed : {

        description(){

            return this.product.description.substring(0,25)

        }


    }


    
}
</script>

<style lang="scss">

.card {

    width: 80%;
    margin: 10%;
    padding: 30px;
    border-radius: 2px;
    box-shadow: 0 0 5px gray;
    background-color:rgba(94, 125, 142, 0.67);  
    

}

 .image-view {

    height: 150px;
    width: 150px;
 
}

 h5.price {
    color: black;

}

 .text-muted {

    color: black;

}

 p.description {

    color: black;

}   


button.btn-view-product-in-cart  {

 color: blueviolet;
 font-size: 1.0rem;
 font-weight: bold;
 background-color:lightyellow;
 padding: 12px;
 border: none;
 border-radius: 5px;
 cursor: pointer;

}

@media (min-width: 400px){

    .card {
        width: 250px;
        margin: 10px;
    }
}

    
</style>