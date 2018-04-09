<template>
  <q-page class="flex-center no-border">
    <q-stepper class="no-border" alternative-labels selected-icon ref="stepper">

      <q-step default title="User Information" subtitle="Basic Information">
        <keep-alive>
          <basic-info-form v-on:userChange="updateUser">
          </basic-info-form>
        </keep-alive>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" label="Continue"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :order="2" title="Plan your trip" subtitle="Plan">
        <keep-alive>
          <travel-info-form v-on:update="updateTripInfo"></travel-info-form>
        </keep-alive>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.previous()" label="Back"/>
          <q-btn @click="$refs.stepper.next()" label="Continue"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :order="3" title="Your favorit guide">
        <found-guiddes :budget="tripInfo.budget"></found-guiddes>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.previous()" label="Back"/>
          <q-btn @click="$refs.stepper.next()" label="Complete"/>
        </q-stepper-navigation>
      </q-step>
      <q-inner-loading :visible="visible" />
    </q-stepper>
  </q-page>
</template>
<style>
</style>

<script>
import basicInfoForm from '../components/stepper/introStep'
import travelInfoForm from '../components/stepper/tripInfo'
import foundGuiddes from '../components/stepper/guideProfiles'
export default {
  name: 'PageIndex',
  components: {
    basicInfoForm,
    travelInfoForm,
    foundGuiddes
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
      dest: 'Tokyo'
    }
  },
  methods: {
    updateUser: function (value) {
      this.user = value
      console.log(this.user)
    },
    updateTripInfo: function (value) {
      this.tripInfo = value
    }
  }
}
</script>
