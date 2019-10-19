<template>
    <form class="form">
      <h1>REGISTER</h1>
         <v-btn>
                <router-link to="/">Home</router-link>
         </v-btn>
          <v-btn>
                <router-link to="/login">LOGIN</router-link>
         </v-btn>
        <v-card>
        
          <v-text-field 
            v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()">
          </v-text-field>

          <v-text-field
            v-model="password" :error-messages="passwordErrors" label="Password" :counter="9"  required @input="$v.password.$touch()" @blur="$v.password.$touch()">
          </v-text-field>

          <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>

          <v-btn class="mr-4" @click="signUp">Sign Up</v-btn>

          <v-btn @click="clear">clear</v-btn>
        </v-card>
        
    </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import firebase from 'firebase'

  export default {
    mixins: [validationMixin],

    validations: {
      email: { required, email },
      password: { required, maxLength: maxLength(9)},
    
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      email: '',
      password: '',
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },

      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },

      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.maxLength && errors.push('Password must be at most 9 characters long')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
    },

    methods: {
     signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
          this.$router.replace('/login')
        }).catch((err) => {
          alert(err.message)
        });
      },

      clear () {
        this.$v.$reset()
        this.name = ''
        this.surname = ''
        this.email = ''
        this.password = ''
        this.checkbox = false
      }
    },
  }

</script>

<style>

</style>
