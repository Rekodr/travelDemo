<template>
  <div class="q-pa-sm">
    <q-field icon=flight_takeoff error-label="this field is required">
      <q-input float-label="Where are you travelling from ?" placeholder="San Francisco, CA, USA"
        :value="tripInfo.origin" @change="val => {tripInfo.origin = val, update()}" clearable
        :error="$v.tripInfo.origin.$error"/>
    </q-field>
    <br>
    <q-field icon="flight_land" error-label="this field is required">
      <q-select filter  filter-placeholder="search" float-label="Where are you going ?"
      :options="destinations" :value="tripInfo.destination"
      @change="val => {tripInfo.destination = val, update()}" clearable
      :error="$v.tripInfo.destination.$error"/>
    </q-field>
    <br>
    <q-field icon="event" error-label="this field is required">
      <q-datetime type="date" modal float-label="When are you leaving ?"
      :value="tripInfo.firstDay" @change="val => { tripInfo.firstDay = val, update()}"
      :error="$v.tripInfo.firstDay.$error"/>
    </q-field>
    <br>
    <q-field icon="event" error-label="this field is required">
      <q-datetime type="date" modal float-label="When are you going back ?"
      :value="tripInfo.lastDay" @change="val => { tripInfo.lastDay = val, update()}"
      :error="$v.tripInfo.lastDay.$error"/>
    </q-field>
    <br>
    <q-field icon="rowing">
      <q-select filter multiple filter-placeholder="search" float-label="What would you like to do?"
        :options="themes" :value="tripInfo.theme" @change="val => { tripInfo.theme = val}" clearable/>
    </q-field>
    <br>
    <br>
    <q-field icon="accessibility" error-label="please tell us own many peope are coming">
      <q-input type="number" float-label="How many people are going ?"
        :value="tripInfo.people" @change="val => { tripInfo.people = val, update()}" clearable
        :error="$v.tripInfo.people.$error"/>
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
import { required } from 'vuelidate/lib/validators'
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
        },
        {
          label: 'Cape Town, South Africa',
          value: 'cp'
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
  mounted: function () {
    this.$emit('lock', true)
  },
  methods: {
    update: function () {
      if (this.validate()) {
        this.$emit('update', this.tripInfo)
        this.$emit('lock', false)
        console.log('unloking....')
      }
    },
    validate () {
      this.$v.tripInfo.$touch()
      if (this.$v.tripInfo.$error === false) {
        return true
      }
      return false
    }
  },
  validations: {
    tripInfo: {
      origin: { required },
      destination: { required },
      firstDay: { required },
      lastDay: { required },
      people: { required }
    }
  }
}
</script>

<style scoped>
</style>
