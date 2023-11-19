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
.fixed-bar {
    position: fixed;
    top: 0;
    z-index: 2;
}

/* 占位元素的样式，高度应与固定元素的高度相同 */
.placeholder {
    height: 56px;
    /* 根据实际情况调整高度 */
}
</style>
  
<script>
export default {};
</script>
  