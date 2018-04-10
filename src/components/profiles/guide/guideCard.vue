<template>
<div>
  <q-card inline style="width: 300px" class="col-xs-12 col-sm-6 col-md-4">
    <q-card-media overlay-position="bottom">
      <img src="~assets/place.jpg">
      <div slot="overlay" class="row justify-between q-pa-sm">
        <q-btn  dense round color="primary" icon="person_pin"
          @click="show"/>
        <q-btn dense round color="primary" icon="shopping cart"/>
      </div>
    <profile @closed="show" :showProfile="showProfile" :guide="guide"></profile>
    </q-card-media>
    <q-card-title>
      {{guide.username}}
      <q-field slot="subtitle" v-bind:helper="`rated ${guide.rated} times`">
        <q-rating  :max="5" readonly v-model="guide.grade" color="red"/>
      </q-field>
    </q-card-title>
    <q-card-main >
      <div>
        <q-btn flat v-bind:label="`service cost: $${guide.service} per person`"/>
      </div>
    </q-card-main>
    <q-card-separator/>
      <div class="row justify-center q-pt-md q-px-sm">
        <q-btn-group rounded>
        <q-btn color="primary" rounded icon="directions_bike" label="view service"/>
        <q-btn color="primary" rounded icon="message" label="chat"/>
        </q-btn-group>
      </div>
    <q-card-actions>
    </q-card-actions>
  </q-card>
</div>
</template>

<script>
import profile from './guideProfile'
export default {
  name: 'guideComp',
  props: ['guide'],
  components: {
    profile
  },
  data () {
    return {
      msg: this.guide.username,
      showProfile: false
    }
  },
  methods: {
    show: function () {
      this.showProfile = !this.showProfile
    }
  }
}
</script>
