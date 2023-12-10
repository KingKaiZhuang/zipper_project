<template>
<v-app-bar scroll-behavior="hide" scroll-threshold="100">
    <v-app-bar-title>ZipperWatch</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-tabs
      v-model="tab"
      color="deep-purple-accent-4"
      align-tabs="center"
    >
      <v-tab to="/">首頁</v-tab>
      <v-tab to="/zipperImage">損壞相片</v-tab>
      <v-tab to="/zipperWatch">zipperWatch</v-tab>
    </v-tabs>
</v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>