<template>
  <q-card inline style="width: 350px" class="col-xs-12 col-sm-6 col-md-4">
    <q-card-media>
      <img src="~assets/place.jpg">
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
      title: this.picture.title,
      msg: this.activity.place,
      picturelink: this.activity.picturelink,
      startTime: this.activity.begintime,
      endTime: this.activity.endtime
    }
  }
}
</script>
