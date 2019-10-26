<template>
    <div>PAYMENT</div>
</template>

<script>
export default {
    props: {
         propTry: Object
    },

    data() {
        return {

        }
    },

    mounted() {
        console.log("I AM passedd", this.props)
    }
}
</script>