<template>
  <q-modal v-model="show" :content-css="{minWidth: '74vw', minHeight: '93vh'}">
    <q-modal-layout>
      <div>
      <q-toolbar slot="header">
        <q-toolbar-title>
           <q-item>
            <q-item-side :avatar="guide.avatar"/>
            <q-item-main>{{guide.username}}</q-item-main>
          </q-item>
        </q-toolbar-title>
        </q-toolbar>
      </div>
      <div>
        <q-carousel color="white"  arrows quick-nav height="250px">
          <q-carousel-slide v-for="picture in guide.pictures" :key="picture" :img-src="picture">
          </q-carousel-slide>
        </q-carousel>
        <q-item>
          <q-item-main>
            <q-rating :max="5" readonly color="red" v-model="guide.grade"></q-rating>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>{{guide.description}}</q-item-main>
          <q-item-side></q-item-side>
        </q-item>
        <q-item>
          <q-item-main v-for="item in guide.specialities" :key="item">{{item}} </q-item-main>
          <q-item-side></q-item-side>
        </q-item>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
export default {
  name: 'guideProfile',
  props: ['showProfile', 'guide'],
  data () {
    return {
      stars: 3
    }
  },
  computed: {
    show: {
      get: function () {
        return this.showProfile
      },
      set: function () {
        this.$emit('closed')
      }
    }
  }
}
</script>
