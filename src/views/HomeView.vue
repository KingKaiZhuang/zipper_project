<template>
  <div class="home">
    <HelloHeader></HelloHeader>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloHeader from '@/components/HelloViewHeader.vue'

export default {
  name: 'HomeView',
  components: {
    HelloHeader
  }
}
</script>
