<template>
<q-modal ref="actmodal" no-backdrop-dismiss no-esc-dismiss v-model="showfromL" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
  <q-modal-layout>
    <q-toolbar slot="header">
      <q-btn round flat dense icon="reply" v-close-overlay/>
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
</q-modal>
</template>

<script>
export default {
  name: 'activityForm',
  props: ['showform'],
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
      this.$refs.actmodal.hide()
    }
  },
  computed: {
    showfromL: {
      get: function () {
        return this.showform
      },
      set: function (value) {
        this.$emit('close')
      }
    }
  }
}
</script>
