<template>
    <div>
        <v-container>
          <div class="hello2">Hello Div 2</div>
          <input class="inputField2" placeholder="abc2">
        </v-container>
        <div class="hello">Hello Div</div>
        <input class="inputField" placeholder="abc">
    </div>
</template>

<script>
export default {
    data() {
        return {
            t1: null,
            t2: null,
            errorMessage: false,
        }
    }
}
</script>