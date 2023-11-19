<template>
  <h1>拉鍊損壞計數器</h1>
  <p>損壞次數：{{ zipperData.value }}</p>
</template>

<script>
import axios from 'axios';
import io from 'socket.io-client';

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
    this.setupWebSocket();
  },
  methods: {
    async fetchZipperData() {
      try {
        // 發送 GET 請求到 /zipper
        const response = await axios.get('http://localhost:3000/zipper');
        // 將伺服器返回的數據存儲到 zipperData 中
        this.zipperData.value = response.data.result[0].ZipperNum;
        console.log(this.zipperData.value);
        setTimeout(fetchData, pollingInterval);
      } catch (error) {
        console.log('Error fetching data from /zipper:', error);
        setTimeout(fetchData, pollingInterval);
      }
    },
    setupWebSocket() {
      this.socket = io('http://localhost:3000');
      this.socket.on('connect', () => {
        console.log('WebSocket connected:', this.socket.connected);
      });

      this.socket.on('zipperDataUpdate', (data) => {
        // 處理資料更新邏輯
        console.log("Received WebSocket update:", data.ZipperNum);
        this.zipperData.value = data.ZipperNum;
      });
    }
  },
};
</script>
