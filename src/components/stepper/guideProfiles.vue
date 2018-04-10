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
          servicecost: 13,
          age: 24,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          rated: 20,
          grade: 4,
          photosLinks: []
        },
        {
          username: 'Sasuke Uchiwa',
          servicecost: 15,
          age: 33,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          rated: 9,
          grade: 3.5,
          photosLinks: []
        },
        {
          username: 'Jin Kazama',
          servicecost: 16,
          age: 45,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          rated: 26,
          grade: 3.5,
          photosLinks: []
        },
        {
          username: ' Megumi Hayashiara',
          service: 20,
          age: 39,
          contact: {
            email: 'someemail@mail.com'
          },
          tour: [],
          rated: 1000,
          grade: 5,
          photosLinks: []
        }
      ]
    }
  }
}
</script>
