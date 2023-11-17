<template>
    <h1>拉鍊損壞計數器</h1>
    <p>損壞次數：{{ zipperData }}</p>
</template>

<style lang="scss">
body {
    font-family: 'Arial', sans-serif;
    text-align: center;
}

h1 {
    color: #3498db;
}

p {
    font-size: 18px;
    color: #2ecc71;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      zipperData: 0,
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
        console.log(response);
        // 將伺服器返回的數據存儲到 zipperData中
        this.zipperData = response.data.result[0].ZipperNum;
        console.log(this.zipperData);
      } catch (error) {
        console.log('Error fetching data from /zipper:', error);
      }
    },
  },
};
</script>