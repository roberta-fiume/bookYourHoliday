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
            v-model="name"  label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()">
          </v-text-field>

         <v-text-field
            v-model="surname" label="Surname" required @input="$v.surname.$touch()" @blur="$v.surname.$touch()">
          </v-text-field>
          
          <v-text-field 
            v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()">
          </v-text-field>

          <v-text-field
            v-model="password" :error-messages="passwordErrors" label="Password" :counter="9"  required @input="$v.password.$touch()" @blur="$v.password.$touch()">
          </v-text-field>

          <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>

          <v-btn class="mr-4" @click="submit">submit</v-btn>

          <v-btn @click="clear">clear</v-btn>
        </v-card>
        
    </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required},
      surname: { required },
      email: { required, email },
      password: { required, maxLength: maxLength(9)},
    
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      password: '',
      email: '',
      surname: '',
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
  
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },

      surnameErrors () {
        const errors = []
        if (!this.$v.surname.$dirty) return errors
        !this.$v.surname.required && errors.push('Surname is required.')
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
      submit () {
        this.$v.$touch();
       let person = this.registeredPerson(this.name, this.surname, this.email, this.password);

       console.log("THIS IS THE PERSONNNN", person);
      },

      clear () {
        this.$v.$reset()
        this.name = ''
        this.surname = ''
        this.email = ''
        this.password = ''
        this.checkbox = false
      },

      registeredPerson(name, surname, email, password) {
          var person = {"personName": name, "personSurname": surname, "personEmail": email, "personPassword": password};
          return person;  
      },

      saveRegisteredPerson() {
         let person = this.registeredPerson(this.name, this.surname, this.email, this.password);
         localStorage.setItem('myPerson', person);
      },
    },
  }

</script>

<style>

</style>
