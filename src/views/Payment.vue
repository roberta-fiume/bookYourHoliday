<template>
    <div>
        <span>PAYMENT</span>
        <div class="div">
            <span class="name">{{infoPersonProp.name}} </span> 
        </div>
 
    </div>
    
</template>

<script>
export default {
    props: {
        infoPersonProp: {
            type: Object
        },

        exampleProp: {
            type: String
        }
    },
  

    data() {
        return {

        }
    },

    created() {
        console.log("I AM passedd", this.infoPersonProp.name);
        console.log("I AM passedd", this.exampleProp);
    }
}
</script>