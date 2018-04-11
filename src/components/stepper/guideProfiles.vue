<template>
<div>
  <div class="column inline q-pa-sm" v-for="guide in guides" :key="guide.name">
    <div v-if="budget.max >= 1">
      <guide-comp v-on:book="book" :guide="guide"></guide-comp>
    </div>
  </div>
</div>
</template>

<script>
import guideComp from '../profiles/guide/guideCard'
export default {
  names: 'guidepage',
  props: ['budget'],
  components: {
    guideComp
  },
  methods: {
    book: function (guide) {
      this.$emit('book', guide)
      this.$emit('lock', false)
    }
  },
  data () {
    return {
      msg: 'hello world',
      guides: [
        {
          username: 'Shinzo Nakamura',
          service: 13,
          age: 24,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          avatar: 'assets/guides/ShinzoNakamura.jpg',
          pictures: ['assets/japanactivities/arctok.jpg', 'assets/japanactivities/teaactivity.jpg', 'assets/image3.jpeg'],
          rated: 20,
          grade: 4,
          description: 'Hi there, My name is Shinzo Nakamura and I am an Accountant.',
          photosLinks: [],
          specialities: ['Fishing', 'Architecture', 'Art', 'Music concert', 'Night Life']
        },
        {
          username: 'Masao Nakama',
          service: 15,
          age: 33,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          avatar: 'assets/guides/japstar.jpg',
          pictures: ['assets/japanactivities/fishing.jpg', 'assets/japanactivities/japaneseMuseum.jpg', 'assets/japanactivities/japannature.jpeg'],
          rated: 9,
          grade: 3.5,
          description: 'Hi there, My name is Masao Nakama and I am a student at Tokyo University. I am a third year architecture student. As such, I love everything related to art. I am also very social; I love meeting new people, learning about new cultures and also trying various foods.',
          photosLinks: [],
          specialities: ['Fishing', 'Architecture', 'Art', 'Music concert', 'Night Life']
        },
        {
          username: 'Taiji Yukawa',
          service: 16,
          age: 45,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          avatar: 'assets/guides/starjp.jpg',
          pictures: ['assets/japanactivities/cimg7951.jpg', 'assets/japanactivities/teaactivity.jpg', 'assets/image9.jpeg'],
          rated: 26,
          grade: 3.5,
          description: 'Hi there, My name is Taiji Yukawa and I am a music student at Tokyo University. I like to play the piano and the guitare. In my free time, I like to spend time in Art Galleries as I am very interested in art It would be a pleasure for me help you plan you next trip to Tokyo and help you discover the city in a new and fun way.',
          photosLinks: [],
          specialities: ['Fishing', 'Music', 'Art', 'Tennis', 'Archery']
        },
        {
          username: ' Megumi Hayashiara',
          service: 20,
          age: 39,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          avatar: 'assets/guides/Megumi_Hayashibara1.jpg',
          pictures: ['assets/japanactivities/shoppingjapanlux.jpg', 'assets/image11.jpeg', 'assets/image12.jpeg'],
          rated: 1000,
          grade: 5,
          description: 'Hi there, My name is Megumi Hayashiara and I am an artist.',
          specialities: ['Shopping', 'Corporate', 'Law', 'Marathon'],
          photosLinks: []
        }
      ]
    }
  }
}
</script>
