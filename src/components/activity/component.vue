<template>
  <q-card style="width: 500px">
    <q-card-media>
      <img src="~assets/place.jpeg">
    </q-card-media>
    <q-card-title>
      {{activity.location}}
    </q-card-title>
    <q-card-main>
      @somedescription
    </q-card-main>
    <q-card-separator />
    <q-card-actions>
      <q-btn flat round dense icon="event" />
      <q-btn flat v-bind:label="activity.startTime" />
      <q-btn flat v-bind:label="activity.endTime" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'place-card',
  props: ['activity'],
  data () {
    return {
      msg: this.activity.place
    }
  }
}
</script>
