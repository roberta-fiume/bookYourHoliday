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


        <div class="anim-destin-wrapper">
            <div class="animation">
                    <Animation />
            </div>
            <div class="destinations-wrapper">
                <div class="destination-box" id="dest1">
                    <h1>Mexico</h1>
                    <img :src="images.mexico" width="300px"/>
                    <v-btn>
                        <router-link to="/Mexico">Book</router-link>
                    </v-btn>
                </div>
                <div class="destination-box" id="dest2">
                    <h1>Dubai</h1>
                    <img :src="images.dubai" width="300px"/>
                    <v-btn>
                        <router-link to="/Dubai">Book</router-link>
                    </v-btn>
                </div>
                <div class="destination-box" id="dest3">
                    <h1>Hawaii</h1>
                    <img :src="images.hawaii" width="300px"/>
                    <v-btn>
                        <router-link to="/Hawaii">Book</router-link>
                    </v-btn>
                </div>
                <div class="destination-box" id="dest4">
                    <h1>Maldives</h1>
                    <img :src="images.maldives"  width="300px"/>
                    <v-btn>
                        <router-link to="/Maldives">Book</router-link>
                    </v-btn>
                </div>
                <div class="destination-box" id="dest5">
                    <h1>Sardinia</h1>
                    <img :src="images.sardinia"  width="300px"/>
                    <v-btn>
                        <router-link to="/Sardinia">Book</router-link>
                    </v-btn>
                </div>
            </div>

        </div>
      

      
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
                images: {
                    mexico: require('@/assets/img/mexico.jpeg'),
                    dubai: require('@/assets/img/dubai.jpg'),
                    hawaii: require('@/assets/img/hawaii.jpg'),
                    maldives: require('@/assets/img/maldives.jpg'),
                    sardinia: require('@/assets/img/sardinia.jpg')
                }
            }

        }
    }
</script>
 
 <style>

    .animation {
        background: green;
        flex: 1 1 40%;
    }

   .anim-destin-wrapper {
       display: flex;
       flex-direction: row;
   }
  
    .destinations-wrapper {
        display: flex;
        background: blue;
        flex-direction: row;
        flex-wrap: wrap;
        flex: 1 1 60%;
        align-items: center;
        justify-content: center;
    }

    .destination-box {
        background: yellow;
        display:  flex;
        flex: 1 1 50%;
        flex-direction: column; 
    }
     #dest5 {
         flex: 0 auto;
    }
 </style>