<template>
  <div>
      <q-field icon="history">
        <q-input  :value="userTempQuestionnaire.q1" type="text" float-label="Have you been to Tokyo, Japan before or is this your first time?"
        @change="val => { userTempQuestionnaire.q1 = val, updateQuestionnaire()}"/>
      </q-field>
      <br>
      <q-field icon="place">
        <q-input :value="userTempQuestionnaire.q2" type="text" float-label="What is the address of your lodge?"
          @change="val => { userTempQuestionnaire.q2 = val, updateQuestionnaire()}" />
      </q-field>
      <br>
      <q-field icon="explore">
        <q-input :value="userTempQuestionnaire.q3" type="text" float-label="Any idea about what you may want to explore in this city?"
          @change="val => { userTempQuestionnaire.q3 = val, updateQuestionnaire()}" />
      </q-field>
      <br>
      <q-field icon="alarm">
        <q-input :value="userTempQuestionnaire.q4" type="text" float-label="When would you prefer to start you days during your trip?"
          @change="val => { userTempQuestionnaire.q4 = val, updateQuestionnaire()}" />
      </q-field>
      <br>
      <q-field icon="assignment">
        <q-input :value="userTempQuestionnaire.q5" type="text" float-label="What would you like to do during your evenings? Resting activities such as massages or active activities"
          @change="val => { userTempQuestionnaire.q5 = val, updateQuestionnaire()}" />
      </q-field>
      <br>
      <q-field icon="assignment">
        <q-input :value="userTempQuestionnaire.q6" type="text" float-label="Please tell me any particular comment that may help me build the trip plan that fits your need for this trip"
          @change="val => { userTempQuestionnaire.q6 = val, updateQuestionnaire()}" />
      </q-field>
      <br>

  </div>
</template>

<script>
export default {
  name: 'step4',
  props: ['user'],
  mounted () {
    this.$emit('lock', false)
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
      this.$emit('questionnaireChange', this.userTempQuestionnaire)
      this.$emit('lock', false)
    }
  }
}
</script>
