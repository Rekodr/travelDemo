<template>
  <div>
    <h3>{{msg}}</h3>
      <q-field icon="person_pin">
        <q-input  :value="userTemp.username" type="text" float-label="What your name ?"
        placeholder="yourname" clearable
        @change="val => { userTemp.username = val, updateUser()}"/>
      </q-field>
      <br>
      <q-field icon="mail_outline">
        <q-input :value="userTemp.email" type="email" float-label="What your E-mail address ?"
          placeholder="youremail@example.com" clearable
          @change="val => { userTemp.email = val, updateUser()}" />
      </q-field>
      <br>
      <q-field icon="date_range">
        <q-datetime popover :value="userTemp.birthday" float-label="When were you born ?" type="date"
        clearable
        @change="val => { userTemp.birthday = val, updateUser()}"/>
      </q-field>
      <br>
      <q-field  icon="place">
        <q-search type="text" :value="userTemp.fromLoc"
          float-label="Where are you from ?" placeholder="Tokyo, Japan" clearable
          @change="val => {userTemp.fromLoc = val, updateUser()}"/>
      </q-field>
      <br>
  </div>
</template>

<script>
export default {
  name: 'step1',
  props: ['user'],
  data () {
    return {
      userTemp: {
        username: null,
        email: null,
        birthday: null,
        fromLoc: null
      },
      destination: '',
      leaveDate: '',
      msg: 'User Information here.'
    }
  },
  methods: {
    updateDest: function (value) {
      console.log(value)
      this.$emit('destChange', value)
    },
    updateUser: function () {
      this.$emit('userChange', this.userTemp)
    }
  }
}
</script>
