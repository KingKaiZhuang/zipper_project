<template>
  <v-app>
    <div class="zipper-container">
      <h1 class="display-4 mb-6 text-center">拉鍊損壞計數器</h1>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-card class="zipper-card" max-width="400" outlined>
            <v-card-title class="zipper-card-title">
              <span class="headline font-weight-bold">損壞次數</span>
            </v-card-title>
            <v-card-text class="zipper-card-text display-2 font-weight-bold">{{ zipperData.value }}</v-card-text>
          </v-card>
        </v-col>
        <!-- Add more columns or customize as needed -->
      </v-row>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios';

const pollingInterval = 3000; // 這裡是 5 秒

export default {
  data() {
    return {
      zipperData: { value: 0 }, // 將數據包裝在物件中
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
  },
};
</script>

<style>
.zipper-container {
  text-align: center;
  padding: 20px;
}

.zipper-card {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 300px;
}

.zipper-card-title {
  background-color: #3498db;
  color: white;
  padding: 10px;
}

.zipper-card-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5em;
  padding: 20px;
}

</style>
