<template>
  <q-page class="flex-center no-border">
    <q-stepper class="no-border" alternative-labels selected-icon ref="stepper">
      <q-step default title="Trip Information" subtitle="Basic Information">
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
          <travel-info-form v-bind:dest="dest"></travel-info-form>
        </keep-alive>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.previous()" label="Back"/>
          <q-btn @click="$refs.stepper.next()" label="Next"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :order="3" title="let finish up">
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
import basicInfoForm from '../components/stepper/step1'
import travelInfoForm from '../components/stepper/step2'
export default {
  name: 'PageIndex',
  data () {
    return {
      visible: false,
      user: {
        username: null,
        birthday: null,
        fromLoc: null
      },
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
    }
  },
  components: {
    basicInfoForm,
    travelInfoForm
  }
}
</script>
