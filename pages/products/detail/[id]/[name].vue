<template>
    <div class="lg:px-40 px-3 flex items-center py-2 bg-white">
        <a href="/" class="font-bold">Trang chủ</a>
        <span class="mx-2">/</span>
        <a href="/products/list">Tất cả sản phẩm</a>
        <span class="mx-2">/</span>
        <div class="text-[#3bb77e]">{{ route.params.name }}</div>
    </div>
     <div class="lg:px-40 px-3 pt-3 bg-[#f4f5f9]">
        <div class="grid grid-cols-2">
            <div class="p-2 lg:col-span-1 col-span-2">
                <Swiper
                    :modules="[SwiperThumbs]" 
                    :slides-per-view="1" 
                    :loop="true"
                >
                    <SwiperSlide v-show="albums" v-for="(album,i) in albums" :key="i" class="flex items-center justify-center">
                        <img class="rounded-md hover:cursor-pointer" :src="`/images/${album.name}`" :alt="album.productId.name">
                    </SwiperSlide>
                    <SwiperSlide v-show="albums.length==0" class="flex items-center justify-center">
                        <img class="rounded-md hover:cursor-pointer" :src="`/images/${product.image}`" :alt="product.name">
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="p-10 mb-3 lg:col-span-1 col-span-2 bg-white rounded-md">
                <div>Mã sản phẩm: <b>{{ product?.id }}</b></div>
                <div class="flex items-center py-4">
                    <span class="text-[#3bb77e] font-bold text-xl">
                        {{ formatCurrency(product?.price - product?.price * product?.discount / 100) }}
                    </span>
                    <span class="ms-2">Giá niêm yết: <b>{{ formatCurrency(product?.price) }}</b></span>
                </div>
                <div class="p-2">
                    {{ product.description ? product.description : 'Đang cập nhật...' }}
                </div>
            </div>
            <div class="col-span-2 pb-3">
                <h3 class="md:text-3xl text-xl font-bold mb-3">Sản phẩm liên quan</h3>
                <Swiper
                :height="300"
                :slides-per-view="5"
                :space-between="10"
                :breakpoints="{
                    350: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }" 
            >
                <SwiperSlide v-show="product.id != p.id" v-for="(p,i) in products" :key="i">
                    <product-card :product="p"/>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
    definePageMeta({
        layout: "default"
    })

    const route = useRoute();

    interface Album {
        productId: {name: string};
        name: string;
    }
    
    interface Product {
        id: number;
        price: number;
        discount: number;
        total: number;
        name: string;
        image: string;
        description: string;
        cateId: {id: number;}
    }

    const formatCurrency = (value: number) => {
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    const {data: dataProducts} = await useFetch(`https://foody-9vwj.onrender.com/api/product/${route.params.id}`);
    const product = dataProducts.value as Product;
    
    const {data} = await useFetch(`https://foody-9vwj.onrender.com/api/album/${route.params.id}`);
    const albums = data.value as Album[];

    const {data: dataProductsMore} = await useFetch(`https://foody-9vwj.onrender.com/api/product/category/${product.cateId.id}`)
    const products = dataProductsMore.value;
</script>