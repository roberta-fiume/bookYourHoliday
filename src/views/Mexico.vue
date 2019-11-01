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
            <v-radio class="radioButtonBedroomSize" label="Single" value="Single"></v-radio>
            <v-radio class="radioButtonBedroomSize" label="Double" value="Double"></v-radio>
            </v-radio-group>
            <p class="bedroom-size-text">You chose: {{ radios || 'null' }}</p>
          <p> Please enter your name:</p> <input v-model="firstName" placeholder="Enter your name" class="inputField">
          <p> Please enter your last name:</p> <input v-model="lastName" placeholder="Enter your last name" class="inputField">
        </v-container>
    </div> 

    <div class="booking-num-people">
        <span>Number of people: {{people}}</span>
        <v-btn class="butt-increment" @click="people++"> + </v-btn>
        <v-btn class="butt-decrement" @click="people--"> - </v-btn>
    </div>

    <div class="booking-bedroom-type">
        <span>Bedroom type: </span>
        <v-container fluid>
            <v-radio-group v-model="bedroomType" :mandatory="false">
            <v-radio class="radioButtonBedroomType" label="Standard" value="Standard"></v-radio>
            <v-radio class="radioButtonBedroomType" label="Suite" value="Suite"></v-radio>
            <v-radio class="radioButtonBedroomType" label="Gold Suite" value="Gold Suite"></v-radio>
            </v-radio-group>
            <p class="bedroom-type-text"> You chose: {{ bedroomType || 'null' }}</p>
        </v-container>
    </div>

    <v-btn class="showPrice" @click="showPrice">Show price</v-btn>

    <p class="errorMessage">{{errorMessage}}</p>

    <div class="booking-price" v-if="priceBox" >
        The booking price is: <span> {{finalPrice}}</span>
        <h2>YOUR BOOKING INFORMATION: </h2>
        <p>Your NAME is: {{infoPerson.name}} </p>
        <p>Your LAST NAME is: {{infoPerson.lastName}} </p>
        <p> Number of people: {{infoPerson.numberPeople}} </p>
        <p> Bedroom Size: {{infoPerson.bedroomSize}} </p>
        <p> Bedroom Type: {{infoPerson.bedroomType}} </p>
        <p> Price is: {{finalPrice}} </p>
    </div> 

    <div>
      <span>Are you happy with the booking?</span>
          <v-radio-group v-model="confirmation" :mandatory="false">
            <div :class="{hideRadioButton:hideRadioButton}">
                 <v-radio id="radioYes" label="Yes" value="Yes"  @change="goToPayment"></v-radio>
            </div>
            <div :class="{hideRadioButton:hideRadioButton}">
                <v-radio id="radioNo" label="No"  value="No"  @change="showButtonEditInfo"></v-radio>
            </div>
         
          </v-radio-group>
        <v-btn v-if="happy" @click="showRouter"><router-link to="/mexico/payment" > Go to payment</router-link></v-btn>
        <router-view :infoPersonProp="infoPerson" :exampleProp="example" v-if="buttonNav"></router-view>
        <v-btn v-if="notHappy"> Edit Information </v-btn>
    </div>

</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/img/mexico.jpeg'),
          },
          {
            src: require('@/assets/img/mexico2.jpg'),
          },
          {
            src: require('@/assets/img/mexico3.jpg'),
          },
          {
            src: require('@/assets/img/mexico4.jpg'),
          }
        ],

        radios: 'Single',
        firstName: null,
        lastName: null,
        people: 0,
        bedroomType: 'Standard',
        finalPrice: '',
        errorMessage: '',
        priceBox: false,
        prices: null,
        infoPerson: {},
        confirmation: '',
        happy: false,
        notHappy: false,
        buttonNav: false,
        example: "helloo",
        hideRadioButton: false
      }
    },
    
    created() {
        this.people = 0;
    },

   methods: {
       showPrice() {
           this.priceBox = !this.priceBox;
           console.log("THIS IS MY STATE",this.priceBox)
           this.createPrices();
           this.clear();
           if (this.priceBox === true) {
             this.errorMessage = null;
           }
       },

       createPrices() {
          let bookingInfo = [];
          bookingInfo.push(this.radios, this.people, this.bedroomType, this.firstName, this.lastName,);
          this.prices = bookingInfo;
          console.log("my arrayyy", this.prices);
          this.combinations();
          this.throwError();
          this.createObjPerson();
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
       },

       throwError() {
         if (this.prices[3] === null || this.prices[4] === null || this.prices[1] == 0) {
            this.errorMessage = "YOUR INFORMATION IS NOT CORRECT. PLEASE RETRY!";
            this.priceBox = !this.priceBox;
            this.clear();
         } else {
            this.errorMessage = null;
         }
       },

       createObjPerson() {
         this.infoPerson.name = this.prices[3];
         this.infoPerson.lastName = this.prices[4];
         this.infoPerson.bedroomSize = this.prices[0];
         this.infoPerson.numberPeople = this.prices[1];
         this.infoPerson.bedroomType = this.prices[2];
         console.log("THIS IS THE OBJECTTT", this.infoPerson)

         return this.infoPerson
       },

       clear() {
         this.firstName = null;
         this.lastName = null;
       },

       goToPayment() {
         this.happy = !this.happy;
         this.notHappy = false;
         this.hideRadioButton = true;
       },

       showButtonEditInfo() {
         this.notHappy = !this.notHappy;
         this.happy = false;
       },

       showRouter() {
         this.buttonNav = !this.buttonNav;
       }
   }


  }
</script>

<style>
  .inputField {
    border-bottom: 2px solid lightseagreen;
  }

  .hideRadioButton {
    display: none;
  }

  
</style>



