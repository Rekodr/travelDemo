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
              description: 'Gyokuro. Gyokuro is regarded as one of the highest grade Japanese green teas. It is popular among green tea lovers. Gyokuro has a sweeter, less bitter taste.',
              icon: 'tag_faces'
            },
            {
              name: 'Bus ride to the Naka Mountains',
              picture: 'assetsb/bus.jpg',
              time: '9:00 AM',
              description: 'Bus ride is 30 minutes. You will take bus VN 202 by the station next to the Yoko tea',
              icon: 'tag_faces'
            },
            {
              name: 'Fishing dragon gods or Cormorant fish',
              picture: 'assets/japanactivities/fishing.jpg',
              time: '10:00 AM to 2:00 PM',
              description: 'Cormorant fish, Cormorant fishing is a traditional fishing method in which fishermen use trained cormorants to fish in rivers.',
              icon: 'tag_faces'
            },
            {
              name: 'Bus ride to Hotel',
              picture: 'assetsb/bus.jpg',
              time: '9:00 AM',
              description: 'Bus ride is 45 minutes. You will take bus VN 205 by the station next to the Yoko tea',
              icon: 'account_balance'
            },
            {
              name: 'Flower Arrengement/ Ikebaka',
              picture: 'assets/japanactivities/ikebaka.jpg',
              time: '10:00 AM to 2:00 PM',
              description: 'Ikebaka is the Japanese art of flower arrangement. It is also known as Kadō. The tradition dates back to the 7thcentury when floral offerings were made at altars.',
              icon: 'tag_faces'
            }
          ]
        },
        {
          id: 2,
          activities: [
            {
              name: 'tea at the Mikanu/ Matcha Tea',
              picture: 'assets/japanactivities/jptea.jpg',
              time: '8:15 AM',
              description: 'Over a thousand years ago, matcha came to Japan as an aid to meditation practice. During long hours of sitting, monks would drink matcha to remain alert yet calm. Modern science has recently confirmed the lessons of centuries of tradition.',
              icon: 'account_balance'
            },
            {
              name: 'transportation',
              picture: 'assets/jwalkapan.jpg',
              time: '10:00 AM',
              description: 'The walk from the Mikanu tea to the Art Museum is 0.7 miles',
              icon: 'account_balance'
            },
            {
              name: 'Japanese Martial Art Musuem/ Tokyo Budokan',
              picture: 'assets/japanactivities/JapaneseMuseum.jpg',
              time: '10:00 AM',
              description: 'The main Nippon Budokan Hall near the Imperial Palace in central Tokyo is also known for martial arts, but it is mainly used for big music concerts with the mega-seating capacity.',
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
