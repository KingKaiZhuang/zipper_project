<template>
  <HelloWorld msg="Zipper Watch" />
  <h1>拉鍊損壞計數器</h1>
  <p>損壞次數：{{ zipperData.value }}</p>
  <v-row align="center" justify="center">
    <v-col cols="auto">
      <v-card class="mx-auto" max-width="344" title="Icons" subtitle="prepend-icon and append-icon"
        prepend-icon="mdi-account" append-icon="mdi-check">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card class="mx-auto" max-width="344" title="Icons" subtitle="prepend and append">
        <template v-slot:prepend>
          <v-icon icon="mdi-account" color="primary"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon icon="mdi-check" color="success"></v-icon>
        </template>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card class="mx-auto" max-width="344" title="Avatars" subtitle="prepend-avatar and append-avatar"
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        append-avatar="https://cdn.vuetifyjs.com/images/john.jpg">
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card class="mx-auto" max-width="344" title="Avatars" subtitle="prepend and append">
        <template v-slot:prepend>
          <v-avatar color="blue-darken-2">
            <v-icon icon="mdi-alarm"></v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-avatar size="24">
            <v-img src="https://cdn.vuetifyjs.com/images/john.png" alt="John"></v-img>
          </v-avatar>
        </template>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld.vue'

const pollingInterval = 5000; // 這裡是 5 秒

export default {
  data() {
    return {
      zipperData: { value: 0 }, // 將數據包裝在物件中
      socket: null,
    };
  },
  mounted() {
    this.fetchZipperData();
  },
  methods: {
    async fetchZipperData() {
      try {
        // 發送 GET 請求到 /zipper
        const response = await axios.get('http://localhost:3000/zipper');
        // 將伺服器返回的數據存儲到 zipperData 中
        this.zipperData.value = response.data.result[0].ZipperNum;
        console.log(this.zipperData.value);
        setTimeout(this.fetchZipperData, pollingInterval);
      } catch (error) {
        console.log('Error fetching data from /zipper:', error);
        setTimeout(this.fetchZipperData, pollingInterval);
      }
    },
  },
  components: {
    HelloWorld
  }
};

</script>
