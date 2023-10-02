<template>
    <div class="border rounded-md bg-white">
        <div class="bg-[#f0f0f0] text-[17px] font-semibold capitalize py-[10px] px-[15px]">Bộ lọc sản phẩm</div>
        <div class="px-[15px] py-[10px]">
            <span class="font-medium text-[#1e1e1e]">Loại sản phẩm</span>
            <navigation-h :navigations="navigations" :id="'products'" />
        </div>
        <div class="px-[15px] py-[10px]">
            <span class="font-medium text-[#1e1e1e]">Giá sản phẩm</span>
            <div class="ps-2 py-2">
                <div class="flex items-center mb-2">
                    <input checked id="radio-1" type="radio" value="" name="default-radio" 
                        class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
                    >
                    <label for="radio-1" class="ml-2 text-sm font-normal text-gray-900">Mặc định</label>
                </div>
                <div class="flex items-center mb-2">
                    <input id="radio-2" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
                    >
                    <label for="radio-2" class="ml-2 text-sm font-normal text-gray-900">Giá dưới 100.000đ</label>
                </div>
                <div class="flex items-center mb-2">
                    <input id="radio-3" type="radio" value="" name="default-radio" 
                        class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
                    >
                    <label for="radio-3" class="ml-2 text-sm font-normal text-gray-900">100.000đ - 200.000đ</label>
                </div>
                <div class="flex items-center mb-2">
                    <input id="radio-4" type="radio" value="" name="default-radio" 
                        class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
                    >
                    <label for="radio-4" class="ml-2 text-sm font-normal text-gray-900">200.000đ - 300.000đ</label>
                </div>
                <div class="flex items-center mb-2">
                    <input id="radio-5" type="radio" value="" name="default-radio" 
                        class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
                    >
                    <label for="radio-5" class="ml-2 text-sm font-normal text-gray-900">300.000đ - 500.000đ</label>
                </div>
                <div class="flex items-center mb-2">
                    <input id="radio-6" type="radio" value="" name="default-radio" 
                        class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
                    >
                    <label for="radio-6" class="ml-2 text-sm font-normal text-gray-900">500.000đ - 1.000.000đ</label>
                </div>
                <div class="flex items-center mb-2">
                    <input id="radio-7" type="radio" value="" name="default-radio" 
                        class="w-4 h-4 text-[#3bb77e] bg-gray-100 border-gray-300 focus:ring-[#3bb77e] focus:ring-2"
                    >
                    <label for="radio-7" class="ml-2 text-sm font-normal text-gray-900">Giá trên 1.000.000đ</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const {navigations} = defineProps(['navigations']);
</script>