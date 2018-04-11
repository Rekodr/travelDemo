<template>
  <div>
    <h3>{{msg}}</h3>
      <q-field icon="person_pin">
        <q-input  :value="userTemp.q1" type="text" float-label="Have you been to Tokyo, Japan before or is this your first time?"
        @change="val => { userTemp.q1 = val, updateUser()}"/>
      </q-field>
      <br>
      <q-field icon="mail_outline">
        <q-input :value="userTemp.q2" type="text" float-label="What is the address of your lodge?"
          @change="val => { userTemp.q2 = val, updateUser()}" />
      </q-field>
      <br>
      <q-field icon="mail_outline">
        <q-input :value="userTemp.q3" type="text" float-label="Any idea about what you may want to explore in this city?"
          @change="val => { userTemp.q3 = val, updateUser()}" />
      </q-field>
      <br>
      <q-field icon="mail_outline">
        <q-input :value="userTemp.q4" type="text" float-label="When would you prefer to start you days during your trip?"
          @change="val => { userTemp.q4 = val, updateUser()}" />
      </q-field>
      <br>
      <q-field icon="mail_outline">
        <q-input :value="userTemp.q5" type="text" float-label="What would you like to do during your evenings? Resting activities such as massages or active activities"
          @change="val => { userTemp.q5 = val, updateUser()}" />
      </q-field>
      <br>
      <q-field icon="mail_outline">
        <q-input :value="userTemp.q6" type="text" float-label="Please tell me any particular comment that may help me build the trip plan that fits your need for this trip"
          @change="val => { userTemp.q6 = val, updateUser()}" />
      </q-field>
      <br>

  </div>
</template>

<script>
export default {
  name: 'step4',
  props: ['user'],
  mounted () {
    this.$emit('lock', true)
  },
  data () {
    return {
      userTempQuestionnaire: {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null
      }
    }
  },
  methods: {
    updateQuestionnaire: function () {
      if (this.validate()) {
        this.$emit('questionnaireChange', this.userTempQuestionnaire)
        this.$emit('lock', false)
      }
    }
  }
}
</script>
