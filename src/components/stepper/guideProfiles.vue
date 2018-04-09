<template>
<div>
  <div class="column inline q-pa-sm" v-for="guide in guides" :key="guide.name">
    <div v-if="budget >= guide.service">
      <guide-comp :guide="guide"></guide-comp>
    </div>
  </div>
</div>
</template>

<script>
import guideComp from '../profiles/guideComp'
export default {
  names: 'guidepage',
  props: ['guides', 'budget'],
  components: {
    guideComp
  },
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>
