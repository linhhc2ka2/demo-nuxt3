<template>
    <div class="bg-white rounded-md px-[10px] pb-5 relative">
        <span 
            v-show="product.discount>0"
            class="absolute top-3 right-3 bg-[#3bb77e] text-white font-medium 
            rounded-tl-[15px] rounded-br-[20px] py-[3px] px-[8px]"
        >
            {{product.discount}}%
        </span>
        <div class="min-h-[224px] max-h-[224px] flex items-center justify-center py-[10px]">
            <a :href="`/products/detail/${ product.id }/${ product.name }`">
                <img :src="`/images/${product.image}`" alt="default_img">
            </a>
        </div>
        <div class="py-[10px] pt-0">
            <a 
                :href="`/products/list/${ product.cateId.id }/${ product.cateId.name }`" 
                class="text-xs text-[#90908e] line-clamp-1"
            >
                {{ product.cateId.name }}
            </a>
            <a
                :href="`/products/detail/${ product.id }/${ product.name }`"
                class="text-sm text-[#000] font-semibold min-h-[38.4px] line-clamp-2"
            >
                {{ product.name }}
            </a>
            <div class="flex items-center p-3 pr-[45px] relative">
                <span class="text-sm font-semibold text-[#3bb77e]">
                    {{ formatCurrency(product.price - product.price*product.discount/100) }}
                </span>
                <span 
                    v-show="product.discount>0"
                    class="text-sm font-normal text-[#90908e] ms-[5px] line-through"
                >
                    {{ formatCurrency(product.price) }}
                </span>
                <button 
                    @click="$emit('addToCart')"
                    class="absolute right-0 w-10 h-10 rounded-full bg-[#e8f6ea] border border-[#cce7d0] 
                    hover:bg-[#3bb77e] hover:border-[#3bb77e]"
                >
                    <i class="fa-solid fa-cart-shopping text-[#3bb77e] hover:text-white"></i>
                </button>
            </div>
        </div>
        <div 
            v-show="product.flashSale>0" 
            class="w-full h-4 bg-[#ffaaaf] rounded-full text-xs font-medium text-white text-center relative"
        >
            <div 
                class="absolute top-0 bg-[#ff424e] h-4 p-0.5 leading-none rounded-full z-[0]" 
                :style="{width: (product.sold/product.total)*100+'%'}"
            ></div>
            <span class="absolute top-0 left-0 w-full z-[1]">Đã bán <b>{{ product.sold }}</b> sản phẩm</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    const formatCurrency = (value: number) => {
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    const { product } = defineProps(['product']);
</script>