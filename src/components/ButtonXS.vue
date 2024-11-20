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
        :class="`px-2 py-1 uppercase text-xs font-semibold rounded ${colors}`"
        @click="onClick"
    >{{ textButton }}</button>
</template>
