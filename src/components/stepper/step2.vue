<template>
  <div>
    <h3>{{msg}}</h3>
    <ul v-for="activity in places" :key="activity.startTime">
      <activity-comp v-bind:activity="activity"></activity-comp>
    </ul>
    <br>
    <br>
    <br>
    <keep-alive>
      <activity-form @close="popup" v-bind:showform="showform" v-on:add="addPlace"></activity-form>
    </keep-alive>
    <q-btn round color="primary" icon="add" @click="popup">
      <q-tooltip>Add activity</q-tooltip>
    </q-btn>
  </div>
</template>

<script>
import activityForm from '../activity/form'
import activityComp from '../activity/component'
export default {
  props: ['dest'],
  components: {
    activityForm,
    activityComp
  },
  data () {
    return {
      showform: false,
      places: [
        { startTime: '@sometime', endTime: '@someOtherTime', location: '@someLocation' }
      ],
      birthday: null
    }
  },
  methods: {
    popup: function () {
      this.showform = !this.showform
      return null
    },
    addPlace: function (value) {
      var place = {
        startTime: value.startTime,
        endTime: value.endTime,
        location: value.place
      }
      this.places.push(place)
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
