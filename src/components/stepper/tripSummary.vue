<template>
  <div>
    <q-timeline>
      <q-timeline-entry heading>Your trip plan in Tokyo</q-timeline-entry>
      <q-timeline-entry color="red" :icon="activity.icon" v-for="activity in activities" :key="activity.time"
        :title="activity.name" :subtitle="activity.time" side="left">
        <div>
          <q-item>
            <q-item-main>{{activity.description}}</q-item-main>
            <q-item-side :image="activity.picture"/>
          </q-item>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  name: 'tripSummary',
  data () {
    return {
      activities: [
        {
          name: 'tea at the Yoko',
          picture: 'assets/japanactivities/teaactivity.jpg',
          time: '8:15 AM',
          description: 'fun time',
          icon: 'tag_faces'
        },
        {
          name: 'Finshing dragon gods',
          picture: 'assets/japanactivities/fishing.jpg',
          time: '10:00 AM',
          description: 'fun time',
          icon: 'tag_faces'
        }
      ]
    }
  }
}
</script>

<style>
</style>
