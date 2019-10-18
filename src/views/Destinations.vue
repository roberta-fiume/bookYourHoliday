<template>
    <div>
        <h1>THIS IS THE HOME PAGE DESTINATION </h1>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>BOOK</span>
                <span class="font-weight-light">YOUR HOLIDAY</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn>
                <router-link to="/login">Login</router-link>
            </v-btn>
        
         
            <v-btn>
                <router-link to="/register">Register</router-link>
            </v-btn>
        </v-app-bar>

        <Animation/>
    </div>
</template>

<script>

    import Animation from '@/components/Animation'

    export default {
        name: 'Destinations',
        components: {
            Animation,  
        },

        data() {
            return {

            }

        }
    }
</script>