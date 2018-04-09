<template>
<div>
  <q-card inline style="width: 350px" class="col-xs-12 col-sm-6 col-md-4">
    <q-card-media>
      <img src="~assets/place.jpg">
    </q-card-media>
    <q-card-title>
      {{guide.username}}
    </q-card-title>
    <q-card-main>
      @somedescription
    </q-card-main>
    <q-card-separator />
    <q-card-actions>
      <q-btn flat label="service cost" />
      <q-btn flat v-bind:label="`$${guide.service} per person`" />
    </q-card-actions>
  </q-card>
</div>
</template>

<script>
export default {
  name: 'guideComp',
  props: ['guide'],
  data () {
    return {
      msg: this.guide.username
    }
  }
}
</script>
