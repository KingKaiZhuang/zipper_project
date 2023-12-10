<template>
    <div class="zipper-img">
        <div v-for="(image, index) in ZipperImage" :key="index" class="img-content">
            <img :src="image"  alt="Zipper Image">
            <p>第 {{ index + 1 }} 次偵測 </p>
        </div>
    </div>
</template>

<style>
.zipper-img {    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.zipper-img img {
    width: 300px;
    height: 200px;
    vertical-align: top;
    transition: .3s;
}
.zipper-img img:hover {
    transform: scale(1.1);
}
.zipper-img .img-content {
    border: 1px solid rgb(191, 191, 191);
    margin: 5px;
    overflow: hidden;
}
.zipper-img .img-content p {
    text-align: center;
    font-size: 20px;
    position: relative;
    z-index: 2;
    background: #fff;
}
</style>

<script>
const images = require.context('@/assets/images', false, /\.(png|jpe?g|gif|svg)$/);

export default {
    data () {
        return {
            ZipperImage: []
        }
    },
    methods: {
        catchImage () {
            this.ZipperImage = images.keys().map(key => images(key));
            console.log(this.ZipperImage);
        }
    },
    created () {
        this.catchImage();
    }
}
</script>