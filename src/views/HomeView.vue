<template>
  <div class="home">
    <HelloHeader/>
    <MemberView/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloHeader from '@/components/HelloViewHeader.vue'
import MemberView from '@/components/MemberView.vue'

export default {
  name: 'HomeView',
  components: {
    HelloHeader,
    MemberView
  }
}
</script>