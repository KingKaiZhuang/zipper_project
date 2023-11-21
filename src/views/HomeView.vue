<template>
  <div class="home">
    <HelloHeader/>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloHeader from '@/components/HelloViewHeader.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloHeader,
    HelloWorld
  }
}
</script>