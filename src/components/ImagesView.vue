<template>
    <v-col cols="6">
        <div class="ziperlogo">
            <img src="https://firebasestorage.googleapis.com/v0/b/zhuang-afef4.appspot.com/o/zipper%2FZipperWatch.png?alt=media&token=4d6ed655-82e5-4677-b705-db01fdfcd046" alt="">
        </div>
    </v-col>
    <v-col cols="6">
        <div class="zipper-img">
            <div class="img-content">
                <img :src="ZipperImage[ZipperImage.length - 1]" alt="Zipper Image">
                <p>{{ result }}</p>
            </div>
        </div>
    </v-col>
</template>

<style>
.ziperlogo {
    display: flex;
    justify-content: center;
    align-items: top;
}
.ziperlogo img {
    height: 380px;
}
.zipper-img {
    display: flex;
    justify-content: center;
    align-items: top;
}

.zipper-img img {
    height: 350px;
    vertical-align: top;
    transition: .3s;
}

.zipper-img .img-content {
    border: 1px solid rgb(191, 191, 191);
    margin: 5px;
    /* overflow: hidden; */
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
    data() {
        return {
            ZipperImage: [],
            result: "檢測結果",
        }
    },
    methods: {
        catchImage() {
            this.ZipperImage = images.keys().map(key => images(key));
            console.log(this.ZipperImage);
        }
    },
    created() {
        this.catchImage();
    }
}
</script>