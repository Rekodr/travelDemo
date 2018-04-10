<template>
<div>
  <div class="column inline q-pa-sm" v-for="guide in guides" :key="guide.name">
    <div v-if="budget.max >= guide.service && budget.min <= guide.service">
      <guide-comp :guide="guide"></guide-comp>
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
  data () {
    return {
      msg: 'hello world',
      guides: [
        {
          username: 'Naruto Uzumaki',
          service: 300,
          age: 24,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          pictures: ['assets/image1.jpeg', 'assets/image2.jpeg', 'assets/image3.jpeg'],
          rated: 20,
          grade: 2
        },
        {
          username: 'Sasuke Uchiwa',
          service: 600,
          age: 33,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          pictures: ['assets/image1.jpeg', 'assets/image2.jpeg', 'assets/image3.jpeg'],
          rated: 9,
          grade: 3.5
        },
        {
          username: 'Jin Kazama',
          service: 1000,
          age: 45,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          pictures: ['assets/image1.jpeg', 'assets/image2.jpeg', 'assets/image3.jpeg'],
          rated: 26,
          grade: 2
        },
        {
          username: 'Oasiris of Egypt',
          service: 5000,
          age: 52,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          pictures: ['assets/image1.jpeg', 'assets/image2.jpeg', 'assets/image3.jpeg'],
          rated: 1000,
          grade: 5
        }
      ]
    }
  }
}
</script>
