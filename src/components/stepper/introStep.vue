<template>
  <div>
    <h3>{{msg}}</h3>
      <q-field icon="person_pin" error-label="username is required.">
        <q-input  :value="userTemp.username" type="text" float-label="What your name ?"
        placeholder="yourname" clearable :error="$v.userTemp.username.$error"
        @change="val => { userTemp.username = val, updateUser()}"/>
      </q-field>
      <br>
      <q-field icon="mail_outline" error-label="you must provide a valid email.">
        <q-input :value="userTemp.email" type="email" float-label="What your E-mail address ?"
          placeholder="youremail@example.com" clearable :error="$v.userTemp.email.$error"
          @change="val => { userTemp.email = val, updateUser()}" />
      </q-field>
      <br>
      <q-field icon="date_range" error-label="this field is required.">
        <q-datetime modal :value="userTemp.birthday" float-label="Date of birth?" type="date"
        clearable :error="$v.userTemp.birthday.$error"
        @change="val => { userTemp.birthday = val, updateUser()}"/>
      </q-field>
      <br>
      <q-field  icon="place" error-label="this field is required.">
        <q-search type="text" :value="userTemp.fromLoc"
          float-label="Where are you from ?" placeholder="Japan" clearable
          :error="$v.userTemp.fromLoc.$error"
          @change="val => {userTemp.fromLoc = val, updateUser()}"/>
      </q-field>
      <br>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'step1',
  props: ['user'],
  mounted () {
    this.$emit('lock', true)
  },
  data () {
    return {
      userTemp: {
        username: null,
        email: '',
        birthday: null,
        fromLoc: null,
        userid: null
      },
      destination: '',
      leaveDate: '',
      msg: 'User Information here.',
      id: 0
    }
  },
  methods: {
    updateDest: function (value) {
      this.$emit('destChange', value)
    },
    updateUser: function () {
      if (this.validate()) {
        this.$emit('userChange', this.userTemp)
        this.$emit('lock', false)
      }
    },
    addUser: function () {
      this.userTemp['userid'] = this.id
      this.id += 1
      this.$store.dispatch('addTraveller', this)
        .catch(e => {
          console.log('Adding User Failed failed.')
        })
    },
    validate () {
      this.$v.userTemp.$touch()
      if (this.$v.userTemp.$error === false) {
        return true
      }
      return false
    }
  },
  validations: {
    userTemp: {
      username: { required },
      email: { required, email },
      birthday: { required },
      fromLoc: { required }
    }
  }
}
</script>
