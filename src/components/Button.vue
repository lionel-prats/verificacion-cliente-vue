<script setup>

    const props = defineProps({
        textButton: {
            type: String,
            required: true
        },
        colors: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            required: true
        },
    });
</script>

<template>
    <button
        type="button"
        :class="`p-2 uppercase text-sm font-extrabold rounded ${colors}`"
        @click="onClick"
    >{{ textButton }}</button>
</template>
