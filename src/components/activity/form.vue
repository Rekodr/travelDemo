<template>
  <q-modal-layout>
    <q-toolbar slot="header">
      <q-btn round flat dense icon="reply" />
      <q-toolbar-title>New Activity</q-toolbar-title>
    </q-toolbar>
    <br>
    <q-field icon="place">
      <q-input :value="place" float-label="Location" placeholder="Activity Place"
      @change="val => { place = val }"/>
    </q-field >
    <br>
    <q-field icon="date_range">
      <q-datetime type="datetime" :value="startTime" float-label="start time"
        @change="val => {startTime = val}"/>
    </q-field>
    <br>
    <q-field icon="date_range">
      <q-datetime type="datetime" :value="endTime" float-label="end time"
        @change="val => {endTime = val}"/>
    </q-field>
    <br>
    <br>
    <div>
      <q-btn icon="save" round label="save" color="secondary" class="float-right on-left"
        @click="save"/>
    </div>
  </q-modal-layout>
</template>

<script>
export default {
  name: 'activityForm',
  data () {
    return {
      place: 'New-York',
      startTime: null,
      endTime: null
    }
  },
  methods: {
    save: function () {
      var info = {
        place: this.place,
        startTime: this.startTime,
        endTime: this.endTime
      }
      this.$emit('add', info)
    }
  }
}
</script>
