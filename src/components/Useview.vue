<template>
    <v-container-fluid>
        <h2>使用到的技術</h2>
        <v-row align="center" justify="center">
            <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
                <v-card class="mx-auto" max-width="344" :color="color">
                    <v-card-item>
                        <div>
                            <div class="text-overline mb-1">
                                {{ variant }}
                            </div>
                            <div class="text-h6 mb-1">
                                Headline
                            </div>
                            <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
                        </div>
                    </v-card-item>

                    <v-card-actions>
                        <v-btn>
                            Button
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container-fluid>
</template>

<script setup>
import { ref } from 'vue'

const variants = ['elevated', 'flat', 'tonal', 'outlined']
const color = ref('indigo')
</script>