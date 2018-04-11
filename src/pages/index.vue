<template>
  <q-page class="flex-center no-border">
    <q-stepper class="no-border" alternative-labels selected-icon ref="stepper">

      <q-step :order="1" default title="User Information" subtitle="Basic Information">
        <keep-alive>
          <basic-info-form v-on:lock="lock" v-on:userChange="updateUser">
          </basic-info-form>
        </keep-alive>
        <q-stepper-navigation>
          <q-btn @click="nextStep" label="Continue"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :order="2" title="Trip Information" subtitle="Plan">
        <keep-alive>
          <travel-info-form v-on:lock="lock" v-on:update="updateTripInfo"></travel-info-form>
        </keep-alive>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.previous()" label="Back"/>
          <q-btn @click="nextStep" label="Continue"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :order="3" title="Your favorite guide">
        <found-guiddes v-on:lock="lock" :budget="tripInfo.budget"></found-guiddes>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.previous()" label="Back"/>
          <q-btn @click="nextStep" label="Continue"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :order="4" title="Questionnaire">
        <questionnaire-form v-on:update="updateQuestionnaire"></questionnaire-form>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.previous()" label="Back"/>
          <q-btn label="Complete"/>
        </q-stepper-navigation>
      </q-step>

    </q-stepper>
  </q-page>
</template>
<style>
</style>

<script>
import basicInfoForm from '../components/stepper/introStep'
import travelInfoForm from '../components/stepper/tripInfo'
import foundGuiddes from '../components/stepper/guideProfiles'
import questionnaireForm from '../components/stepper/questionnaire'
export default {
  name: 'PageIndex',
  components: {
    basicInfoForm,
    travelInfoForm,
    foundGuiddes,
    questionnaireForm
  },
  provide () {
    return {
      pagelock: this.pagelock
    }
  },
  data () {
    return {
      visible: false,
      user: {
        username: null,
        birthday: null,
        fromLoc: null
      },
      tripInfo: {},
      guide: {},
      dest: 'Tokyo',
      pagelock: false,
      questions: {}
    }
  },
  methods: {
    updateUser: function (value) {
      this.user = value
    },
    updateTripInfo: function (value) {
      this.tripInfo = value
    },
    updateQuestionnaire: function (value) {
      this.questions = value
    },
    nextStep: function () {
      if (this.pagelock === false) {
        console.log('lock st: ' + this.pagelock)
        this.$refs.stepper.next()
        this.pagelock = true
      } else {
        this.$q.notify({
          message: 'Please complete all the required fields !',
          timeout: 1500,
          type: 'negative',
          position: 'top'
        })
      }
    },
    lock: function (value) {
      this.pagelock = value
    }
  }
}
</script>
