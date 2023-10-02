<template>
    <ul class="flex items-center">
        <li class="py-[14px] px-[15px] font-medium text-[15px]"><a href="/">Trang chủ</a></li>
        <li class="py-[14px] px-[15px] font-medium text-[15px]">
            <a 
                href="/products/list" 
                id="dropdownNavBtn" 
                data-dropdown-toggle="dropdownHover" 
                data-dropdown-trigger="hover"
                class="flex items-center justify-between"
            >
                Sản phẩm
                <i class="fa-solid fa-angle-down ms-2"></i>
            </a>
            <!-- Dropdown menu -->
            <div 
                id="dropdownHover" 
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
                <ul 
                    class="py-2 text-sm text-gray-700 dark:text-gray-200" 
                    aria-labelledby="dropdownNavBtn"
                >
                    <li v-for="(nav, i) in navigations" :key="i">
                        <a
                            :href="`/products/list/${ nav.id }/${ nav.name }`" 
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            {{ nav.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="py-[14px] px-[15px] font-medium text-[15px]"><a href="/about">Giới thiệu</a></li>
        <li class="py-[14px] px-[15px] font-medium text-[15px]"><a href="/contact">Liên hệ</a></li>
    </ul>
</template>

<script setup lang="ts">
    const { navigations } = defineProps(['navigations'])
</script>