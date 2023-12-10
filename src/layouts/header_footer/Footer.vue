<script setup>
import { reactive } from 'vue';

const socialMedias = reactive([
    {
        icon: 'mdi-facebook',
        link: ''
    },
    {
        icon: 'mdi-twitter',
        link: ''
    },
    {
        icon: 'mdi-linkedin',
        link: ''
    },
    {
        icon: 'mdi-instagram',
        link: ''
    },
])
</script>


<template>
    <v-footer rounded class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>

            <v-col class="text-center mt-4" cols="12">
                <v-btn v-for="media in socialMedias" :key="media" class="mx-4" :icon="media.icon" :href="media.link"
                    variant="text"></v-btn>
            </v-col>


            <v-col class="text-center" cols="12">
                <strong>&copy; {{ new Date().getFullYear() }} Daniel. All Rights Reserved.</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>