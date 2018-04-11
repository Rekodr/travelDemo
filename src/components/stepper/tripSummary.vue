<template>
  <div>
    <q-timeline>
      <div v-for="day in days" :key="day.id">
        <q-timeline-entry heading>Day {{day.id}}/{{days.length}}</q-timeline-entry>
        <q-timeline-entry content color="red" :icon="activity.icon" v-for="activity in day.activities"
        :key="activity.time" :title="activity.name" :subtitle="activity.time">
          <q-item>
            {{activity.description}}
            <q-item-side :image="activity.picture"/>
          </q-item>
        </q-timeline-entry>
      </div>
    </q-timeline>
  </div>
</template>

<script>
export default {
  name: 'tripSummary',
  data () {
    return {
            days: [
        {
          id: 1,
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
        },
        {
          id: 2,
          activities: [
            {
              name: 'tea at the Yoko',
              picture: 'assets/japanactivities/teaactivity.jpg',
              time: '8:15 AM',
              description: 'fun time',
              icon: 'account_balance'
            },
            {
              name: 'Finshing dragon gods',
              picture: 'assets/japanactivities/fishing.jpg',
              time: '10:00 AM',
              description: 'fun time',
              icon: 'account_balance'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
