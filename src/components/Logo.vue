<script setup>

    const props = defineProps({
        fontSize: {
            type: String,
            required: true
        },
    });
    
</script>

<template>
    <!-- text-4xl md:text-5xl  -->
    
    <!-- logo Venezuela
    <div class="font-bold text-white">
        <span class="text-yellow-300">Ver</span>
        <span class="text-blue-700">S<span class="text-white">y</span>s</span>
        <span class="text-red-600">Tech</span>
    </div>
     -->

    <!-- logo Argentina -->
    <div :class="`${fontSize} font-bold text-white`">
        <span class="text-blue-500">Ver</span>
        <span class="text-white">S<span class="text-yellow-200">y</span>s</span>
        <span class="text-blue-500">Tech</span>
    </div>
</template>