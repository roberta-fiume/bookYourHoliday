<template>
    <div>PAYMENT</div>
</template>

<script>
export default {
  props:['infoPersonProp'],

    data() {
        return {

        }
    },

    created() {
        console.log("I AM passedd", this.infoPersonProp)
    }
}
</script>