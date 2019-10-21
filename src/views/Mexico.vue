<template>
<div>
 <h1> MEXICO</h1>
    <v-carousel>
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        ></v-carousel-item>
    </v-carousel>

    <div class="booking-bedroom-size">
        <span>Bedroom: </span>
        <v-container fluid>
            <v-radio-group v-model="radios" :mandatory="false">
            <v-radio label="Single" value="Single"></v-radio>
            <v-radio label="Double" value="Double"></v-radio>
            </v-radio-group>
            <p> You chose: {{ radios || 'null' }}</p>
        </v-container>
    </div>

    <div class="booking-num-people">
        <span>Number of people: </span>
        <span>{{people}}</span>
        <v-btn class="butt-increment" @click="increment"> + </v-btn>
    </div>

    <div class="booking-bedroom-type">
        <span>Bedroom type: </span>
        <v-container fluid>
            <v-radio-group v-model="bedroomType" :mandatory="false">
            <v-radio label="Standard" value="Standard"></v-radio>
            <v-radio label="Suite" value="Suite"></v-radio>
            <v-radio label="Gold Suite" value="Gold Suite"></v-radio>
            </v-radio-group>
            <p> You chose: {{ bedroomType || 'null' }}</p>
        </v-container>
    </div>

    <v-btn @click="showPrice">Show price</v-btn>

    <div class="booking-price" v-if="priceBox" >
        The booking price is: <span> {{finalPrice}}</span>
    </div>

</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],

        radios: 'Single',
        people: 0,
        bedroomType: 'Standard',
        finalPrice: '',
        priceBox: false,
        prices: []
      }
    },


    created() {
        this.people = 0;
    },

   methods: {
       increment() {
           this.people++;
       },

       showPrice() {
           this.priceBox = !this.priceBox;
           this.createPrices();
       },

       createPrices() {
           let bookingInfo = [];
           bookingInfo.push(this.radios, this.people, this.bedroomType);
           this.prices = bookingInfo;
          this.combinations();

       },

       combinations() {
         if (this.prices[0] === "Single" && this.prices[1] == 1 && this.prices[2] === "Standard") {
             this.finalPrice = '£50';
             console.log("FINAL PRICEEE", this.finalPrice)    
         } else if (this.prices[0] === "Single" && this.prices[1] == 1 && this.prices[2] === "Suite") {
             this.finalPrice = "We're sorry, we don't have Suites for single bedrooms";
        } else if (this.prices[0] === "Single" && this.prices[1] == 2 && this.prices[2] === "Standard") {
             this.finalPrice = "Error! there cannot be two people in a Single bedroom. Please retry.";
        }  else if (this.prices[0] === "Single" && this.prices[1] == 1 && this.prices[2] === "Gold Suite") {
             this.finalPrice = "We're sorry, we don't provide Gold Suites for single bedrooms";
         } else if (this.prices[0] === "Double" && this.prices[1] == 1 && this.prices[2] === "Standard") {
             this.finalPrice = '£100';
         } else if (this.prices[0] === "Double" && this.prices[1] == 1 && this.prices[2] === "Standard") {
              this.finalPrice = '£100';
         } else if (this.prices[0] === "Double" && this.prices[1] == 1 && this.prices[2] === "Suite") {
               this.finalPrice = '£170';
         } else if (this.prices[0] === "Double" && this.prices[1] == 1 && this.prices[2] === "Gold Suite") {
              this.finalPrice = '£220';
         } else if (this.prices[0] === "Double" && this.prices[1] == 2 && this.prices[2] === "Standard") {
             this.finalPrice = '£200';
         } else if (this.prices[0] === "Double" && this.prices[1] == 2 && this.prices[2] === "Suite") {
              this.finalPrice = '£270';
         } else if (this.prices[0] === "Double" && this.prices[1] == 2 && this.prices[2] === "Gold Suite") {
               this.finalPrice = '£350';
         }
       }
   }


  }
</script>

