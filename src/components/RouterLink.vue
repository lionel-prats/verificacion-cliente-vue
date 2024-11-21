<script setup>
    import { RouterLink } from "vue-router"

    const props = defineProps({
        to: {
            type: String,
            required: true
        },
        colors: {
            type: String,
            required: true
        },
    });
</script>

<template>
    <RouterLink 
        :class="`p-2 uppercase text-sm font-extrabold rounded ${colors}`"
        :to="{name: to}"
    ><slot></slot></RouterLink>
</template>
