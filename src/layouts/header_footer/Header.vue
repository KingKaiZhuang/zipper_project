<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const route = useRoute();
const path = computed(() => route.path.replace('/', ''));
const pageTitle = ref('');
const { mobile } = useDisplay()

const buttons = [
    {
        value: 'index',
        text: '首頁',
        icon: 'mdi-home',
        textClass: 'text-green',
        to: '/',
    },
    {
        value: 'resume',
        text: '拉鍊監控',
        icon: 'mdi-file-account',
        textClass: 'text-brown-darken-1',
        to: '/ZipperWatch',
    },
    {
        value: 'about',
        text: '關於',
        icon: 'mdi-information',
        textClass: 'text-blue',
        to: '/about',
    },
    {
        value: 'contact',
        text: '成員',
        icon: 'mdi-phone-incoming',
        textClass: 'text-yellow-darken-4',
        to: '/contact',
    },
];

onMounted(() => {
    pageTitle.value = path.value;
});

</script>


<template>
    <v-app-bar app :elevation="5" fixed>
        <v-app-bar-title class="text-deep-purple-lighten-2 text-uppercase">
            <span class="font-weight-light">Zipper</span>
            <span>Watch</span>
        </v-app-bar-title>
        <v-spacer v-if="mobile"></v-spacer>

        <v-btn-toggle v-model="pageTitle">
            <v-btn v-for="button in buttons" :key="button.value" rounded="xl" size="large" :class="button.textClass"
                :value="button.value" :to="button.to">
                <v-icon :icon="button.icon" />
                <span v-if="!mobile">{{ button.text }}</span>
            </v-btn>
        </v-btn-toggle>

        <v-spacer></v-spacer>
    </v-app-bar>
</template>