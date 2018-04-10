<template>
  <q-modal v-model="show" :content-css="{minWidth: '80vw', minHeight: '90vh'}">
    <q-modal-layout>
      <div>
      <q-toolbar slot="header">
          <q-item>
            <q-item-side avatar="assets/avatar.jpg"/>
            <q-item-main>
              <q-item-title>{{guide.username}}</q-item-title>
            </q-item-main>
          </q-item>
        </q-toolbar>
      </div>
      <div>
        <q-list>
          <q-list-header>Profile</q-list-header>
            <q-carousel  arrows quick-nav height="250px">
              <q-carousel-slide v-for="picture in guide.pictures" :key="picture" v-bind:img-src="picture">
              </q-carousel-slide>
            </q-carousel>
          <q-item>
            <q-item-main>{{guide}}</q-item-main>
            <q-item-side></q-item-side>
          </q-item>
          <q-item-separator />
        </q-list>
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
