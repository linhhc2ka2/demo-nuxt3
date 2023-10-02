<template>
    <div class="md:flex hidden items-center py-3">
        <span>Sắp xếp</span>
        <div class="flex items-center ms-2">
            <input id="sort-1" type="radio" value="" name="sort-radio" 
                @click="$emit('sortNameAsc')"
                class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
            >
            <label for="sort-1" class="ml-2 text-sm font-normal text-gray-900">Tên A-Z</label>
        </div>
        <div class="flex items-center ms-2">
            <input id="sort-2" type="radio" value="" name="sort-radio" 
                @click="$emit('sortNameDesc')"
                class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
            >
            <label for="sort-2" class="ml-2 text-sm font-normal text-gray-900">Tên Z-A</label>
        </div>
        <div class="flex items-center ms-2">
            <input id="sort-3" type="radio" value="" name="sort-radio" 
                @click="$emit('sortPriceAsc')"
                class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
            >
            <label for="sort-3" class="ml-2 text-sm font-normal text-gray-900">Giá thấp đến cao</label>
        </div>
        <div class="flex items-center ms-2">
            <input id="sort-4" type="radio" value="" name="sort-radio" 
                @click="$emit('sortPriceDesc')"
                class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
            >
            <label for="sort-4" class="ml-2 text-sm font-normal text-gray-900">Giá cao đến thấp</label>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>