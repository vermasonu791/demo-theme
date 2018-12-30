<template>
<div>
  <br>
<div id="google-signin-button"></div>

  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
      <h4 class="subheading">Build your application today!</h4>
    </v-layout>
  </v-parallax>
  <v-container grid-list-xs>
    
    <v-layout row wrap>
      <v-flex xs12>
      <form>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="name"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-validate="'required|email'"
      v-model="email"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-select
      v-validate="'required'"
      :items="items"
      v-model="select"
      :error-messages="errors.collect('select')"
      label="Select"
      data-vv-name="select"
      required
    ></v-select>
    <v-checkbox
      v-validate="'required'"
      v-model="checkbox"
      :error-messages="errors.collect('checkbox')"
      value="1"
      label="Option"
      data-vv-name="checkbox"
      type="checkbox"
      required
    ></v-checkbox>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
      </v-flex>
       <p>{{ radios || 'null' }}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Radio 1" value="radio-1"></v-radio>
      <v-radio label="Radio 2" value="radio-2"></v-radio>
    </v-radio-group>
</v-layout>
  </v-container>
</div>


</template>
<script>

  export default {
    name:'login',
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      radios: 'radio-1',
      items: [
        'Angular',
        'Vuejs',
        'React'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }),

    mounted() {
      this.$validator.localize('en', this.dictionary);
      gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn
    })
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      },
  onSignIn(user) {
const profile = user.getBasicProfile();
console.log(profile);
// This is null if the 'email' scope is not present.
}

    }
  }
</script>