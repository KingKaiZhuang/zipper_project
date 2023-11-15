<template>
    <h1>拉鍊損壞計數器</h1>
    <p>損壞次數：<span id="damageCounter">0</span></p>
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
      number: 0,
    };
  },
  mounted() {
    const filePath = "";

    axios.get(filePath)
      .then(response => {
        console.log(`成功抓取檔案 ${filePath}：`, response.data.num);
        this.number = response.data.num;
      })
      .catch(error => {
        console.error('抓取檔案時發生錯誤：', error.message);
      });
  },
};
</script>