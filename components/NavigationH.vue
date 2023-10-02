<template>
    <ul :id="`accordion-collapse-${id}`" data-accordion="collapse">
        <li class="py-[14px] px-[15px] font-medium text-[15px]"><a href="/">Trang chủ</a></li>
        <li 
            :id="`accordion-collapse-heading-${id}`"
            class="py-[14px] px-[15px] font-medium text-[15px]"
        >
            <a 
                href="/products/list"
                :data-accordion-target="`#accordion-collapse-body-${id}`" 
                aria-expanded="true" 
                :aria-controls="`accordion-collapse-body-${id}`"
                class="flex items-center justify-between bg-white"
            >
                Sản phẩm
                <i class="fa-solid fa-angle-down ms-2"></i>
            </a>
        </li>
        <div :id="`accordion-collapse-body-${id}`" class="hidden w-full" :aria-labelledby="`accordion-collapse-heading-${id}`">
            <ul class="px-2 max-h-[200px] overflow-y-auto">
                <li 
                    v-for="(nav,i) in navigations"
                    :key="i"
                    class="py-[14px] px-[15px] font-medium text-[15px]"
                >
                    <a :href="`/products/list/${ nav.id }/${ nav.name }`">
                        {{ nav.name }}
                    </a>
                </li>
            </ul>
        </div>
        <li class="py-[14px] px-[15px] font-medium text-[15px]"><nuxt-link to="/about">Giới thiệu</nuxt-link></li>
        <li class="py-[14px] px-[15px] font-medium text-[15px]"><nuxt-link to="/contact">Liên hệ</nuxt-link></li>
    </ul>
</template>

<script setup lang="ts">
    const { navigations, id } = defineProps(['navigations', 'id'])
</script>

<style scoped>
#accordion-collapse-body-1 ul {
    max-height: 200px;
    overflow-y: auto;
}
</style>