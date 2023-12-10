<template>
  <div class="zipper-container">
    <h1 class="text-center">拉鍊損壞計數器</h1>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" sm="6">
          <v-card class="mx-auto zipper-card" max-width="344">
            <v-card-title class="zipper-card-title text-center">損壞次數</v-card-title>
            <v-card-text class="zipper-card-text text-center">{{ zipperData.value }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-card class="mx-auto zipper-card" max-width="344">
            <v-card-title class="zipper-card-title text-center">無瑕疵比例</v-card-title>
            <v-card-text class="zipper-card-text text-center">{{ successPercent.value  }}<span>%</span></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <v-card class="mx-auto zipper-card" max-width="344">
            <v-card-title class="zipper-card-title text-center">瑕疵比例</v-card-title>
            <v-card-text class="zipper-card-text text-center">{{ wrongPercent.value }}<span>%</span></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

const pollingInterval = 3000; // 這裡是 5 秒

export default {
  data() {
    return {
      zipperData: { value: 0 }, // 將數據包裝在物件中
      successPercent: { value: 0 },
      wrongPercent: { value: 0 }
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
        this.zipperData.value = response.data.data[0].ZipperNum;
        this.successPercent.value = response.data.successPercent;
        this.wrongPercent.value = response.data.wrongPercent;
        console.log("拉鍊損壞次數:",this.zipperData.value);
        console.log("拉鍊成功比例:",this.successPercent);
        console.log("拉鍊損壞比例:",this.wrongPercent);
        setTimeout(this.fetchZipperData, pollingInterval);
      } catch (error) {
        console.log('Error fetching data from /zipper:', error);
        setTimeout(this.fetchZipperData, pollingInterval);
      }
    },
  },
  components: {
  },
};
</script>

<style scoped>
.zipper-container {
  padding: 20px;
}

.zipper-card {
  background-color: #333;
  color: white;
}

.zipper-card-title {
  font-size: 24px;
}

.zipper-card-text {
  font-size: 36px;
  font-weight: bold;
}
</style>
