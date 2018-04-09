<template>
  <q-page class="flex-center no-border">
    <q-stepper class="no-border" alternative-labels selected-icon ref="stepper">
      <q-step default title="User Information" subtitle="Basic Information">
        <keep-alive>
          <basic-info-form v-on:changeDest="updateDest" v-on:userChange="updateUser">
          </basic-info-form>
        </keep-alive>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" label="Continue"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :order="2" title="Plan your trip" subtitle="Plan">
        <keep-alive>
          <travel-info-form :themes="themes" :destinations="destinations"
            v-on:update="updateTripInfo"></travel-info-form>
        </keep-alive>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.previous()" label="Back"/>
          <q-btn @click="$refs.stepper.next()" label="Continue"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :order="3" title="Your favorit guide">
        <found-guiddes :guides="guides" :budget="tripInfo.budget"></found-guiddes>
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
      destinations: [
        {
          label: 'Tokyo, Japan',
          value: 'tok'
        },
        {
          label: 'San Francisco, CA, USA',
          value: 'sf'
        }
      ],
      themes: [
        {
          label: 'Hiking',
          value: 'hik'
        },
        {
          label: 'Restaurent',
          value: 'restau'
        },
        {
          label: 'kayaking',
          value: 'kay'
        }
      ],
      guides: [
        {
          username: 'Naruto Uzumaki',
          service: 300,
          tour: []
        },
        {
          username: 'Sasuke Uchiwa',
          service: 600,
          tour: []
        },
        {
          username: 'Jin Kazama',
          service: 1000,
          tour: []
        },
        {
          username: 'Oasiris of Egypt',
          service: 5000,
          tour: []
        }
      ],
      dest: 'Tokyo'
    }
  },
  methods: {
    updateDest: function (value) {
      this.dest = value
      console.log(this.dest)
    },
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
