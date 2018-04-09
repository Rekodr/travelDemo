<template>
  <div class="q-pa-sm">
    <q-field icon=flight_takeoff>
      <q-input float-label="Where are you travelling from ?" placeholder="San Francisco, CA, USA"
        :value="tripInfo.origin" @change="val => {tripInfo.origin = val, update()}" clearable/>
    </q-field>
    <br>
    <q-field icon="flight_land">
      <q-select filter  filter-placeholder="search" float-label="Where are you going ?"
      :options="destinations" :value="tripInfo.destination"
      @change="val => {tripInfo.destination = val, update()}" clearable/>
    </q-field>
    <br>
    <q-field icon="event">
      <q-datetime type="date" modal float-label="When are you leaving ?"
      :value="tripInfo.firstDay" @change="val => { tripInfo.firstDay = val, update()}"/>
    </q-field>
    <br>
    <q-field icon="event">
      <q-datetime type="date" modal float-label="When are you going back ?"
      :value="tripInfo.lastDay" @change="val => { tripInfo.lastDay = val, update()}"/>
    </q-field>
    <br>
    <q-field icon="rowing">
      <q-select filter multiple filter-placeholder="search" float-label="What would you like to do?"
        :options="themes" :value="tripInfo.theme" @change="val => { tripInfo.theme = val}" clearable/>
    </q-field>
    <br>
    <br>
    <q-field icon="accessibility">
      <q-input type="number" float-label="How many people are going ?"
        :value="tripInfo.people" @change="val => { tripInfo.people = val, update()}" clearable/>
    </q-field>
    <br>
    <q-field icon="monetization on" label="What is your budget range per person ?">
      <q-range label-always :min="0" :max="10000"
        v-model="tripInfo.budget" @input="val => { tripInfo.budget = val, update()}"
        :right-label-value="`$${tripInfo.budget.max}`" :left-label-value="`$${tripInfo.budget.min}`"/>
    </q-field>
  </div>
</template>

<script>
export default {
  name: 'tripinformation',
  props: [],
  data () {
    return {
      tripInfo: {
        origin: null,
        destination: null,
        firstDay: null,
        lastDay: null,
        people: null,
        budget: {
          min: 0,
          max: 1000
        },
        theme: []
      },
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
      ]
    }
  },
  methods: {
    update: function () {
      this.$emit('update', this.tripInfo)
    }
  }
}
</script>

<style scoped>
</style>
