<template>
    <div class="text-sm text-[#333]">
        <Header/>
        <div>
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>

<style>
@import url("~/assets/css/main.css");
</style>
  