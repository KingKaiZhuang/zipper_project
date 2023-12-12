<template>
  <div class="home">
    <HelloHeader/>
    <HelloWorld/>
    <!-- <UseView /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloHeader from '@/components/HelloViewHeader.vue'
import HelloWorld from '@/components/HelloWorld.vue'
// import UseView from '@/components/Useview.vue'

export default {
  name: 'HomeView',
  components: {
    HelloHeader,
    HelloWorld,
    // UseView
  }
}
</script>