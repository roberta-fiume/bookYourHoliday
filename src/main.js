import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'



Vue.config.productionTip = false

Vue.use(firestorePlugin)

var firebaseConfig = {
  apiKey: "AIzaSyAYEuWuajd9Mdl9zmFjQL8aFQiGvds_UGI",
  authDomain: "bookyourholiday-433ad.firebaseapp.com",
  databaseURL: "https://bookyourholiday-433ad.firebaseio.com",
  projectId: "bookyourholiday-433ad",
  storageBucket: "bookyourholiday-433ad.appspot.com",
  messagingSenderId: "517173127455",
  appId: "1:517173127455:web:f40e01b9058160d875682a",
  measurementId: "G-LH0VSJY1TV"
};

 firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()


new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
