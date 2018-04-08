<template>
  <div>
    <h3>{{msg}}</h3>
    <ul v-for="activity in places" :key="activity.startTime">
      <activity-comp v-bind:activity="activity"></activity-comp>
    </ul>
    <br>
    <br>
    <br>
    <q-modal v-model="show" :content-css="{minWidth: '80vw', minHeight: '80vh', padding: '20px' }">
      <activity-form v-on:add="addPlace"></activity-form>
    </q-modal>
    <q-btn round color="primary" icon="add" @click="popup">
      <q-tooltip>Add activity</q-tooltip>
    </q-btn>
  </div>
</template>

<script>
import activityForm from '../activity/form'
import activityComp from '../activity/component'
export default {
  name: 'step1',
  props: ['dest'],
  components: {
    activityForm,
    activityComp
  },
  data () {
    return {
      show: false,
      places: [
        { startTime: '@sometime', endTime: '@someOtherTime', location: '@someLocation' }
      ],
      birthday: null
    }
  },
  methods: {
    popup: function () {
      this.show = !this.show
      return null
    },
    addPlace: function (value) {
      var place = {
        startTime: value.startTime,
        endTime: value.endTime,
        location: value.place
      }
      this.places.push(place)
      console.log(this.places)
    }
  },
  computed: {
    msg: function () {
      return 'Let"s plan your trip to ' + this.dest
    }
  }
}
</script>

<style scoped>
</style>
