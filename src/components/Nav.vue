<template>
    <nav>
        <v-toolbar dark flat app color="primary" class="fixed-bar">
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Zipper</span>
                <span>Watch</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn to="/">
                <span>首頁</span>
            </v-btn>
            <v-btn to="/zipperWatch">
                <span>拉鍊監測</span>
            </v-btn>
        </v-toolbar>
        <!-- 添加占位元素 -->
        <div class="placeholder"></div>
    </nav>
</template>
  
<style scoped>

</style>
  
<script>
export default {};
</script>
  