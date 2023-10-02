<template>
    <Alert v-if="show" />
    <div class="lg:px-40 px-3">   
        <div class="section_slides py-4">
            <Swiper
                :height="300"
                :modules="[SwiperAutoplay]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                    delay: 4000,
                    disableOnInteraction: true
                }"
            >
                <SwiperSlide><img src="/images/slider_1.jpg" class="rounded" alt="slides"></SwiperSlide>
                <SwiperSlide><img src="/images/slider_1.jpg" class="rounded" alt="slides"></SwiperSlide>
            </Swiper>
        </div>
        <div class="section_flashsale bg-[#ff463b] rounded-xl p-4 mt-3">
            <div class="flex items-center justify-between pb-3">
                <h3 class="text-white text-xl font-bold">
                    <nuxt-link to="/products/list" class="hover:text-[#ffe818]">Săn sale mỗi ngày</nuxt-link>
                </h3>
                <div 
                    id="countdown"
                    data-time="31/12/2024 23:59:59"
                    data-countdown-type="hours" 
                    class="flex items-center justify-end"
                >
                    <span class="text-white me-2">Kết thúc sau</span>
                    <div class="text-center bg-[#fabd0d] rounded px-2 py-1">
                    <span class="block text-sm font-bold">{{ hours }}</span>
                    <span class="block text-[10px]">Giờ</span>
                    </div>
                    <span class="text-base text-[#fabd0d] font-bold mx-2">:</span>
                    <div class="text-center bg-[#fabd0d] rounded px-2 py-1">
                    <span class="block text-sm font-bold">{{ minutes }}</span>
                    <span class="block text-[10px]">Phút</span>
                    </div>
                    <span class="text-base text-[#fabd0d] font-bold mx-2">:</span>
                    <div class="text-center bg-[#fabd0d] rounded px-2 py-1">
                    <span class="block text-sm font-bold">{{ seconds }}</span>
                    <span class="block text-[10px]">Giây</span>
                    </div>
                </div>
            </div>
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
                <SwiperSlide v-for="(p,i) in productsFlashSale" :key="i">
                    <product-card :product="p" @addToCart="addToCart(p)" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="section_brand mt-3">
            <h3 class="text-xl font-bold pb-3">
                <nuxt-link to="/products/list">Thương hiệu nổi bật</nuxt-link>
            </h3>
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
                <SwiperSlide>
                    <img class="border-2 border-[#3bb77e] rounded-lg p-1" src="/images/vinamilk.jpg" height="120" alt="img_default" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="border-2 border-[#3bb77e] rounded-lg p-1" src="/images/thtruemilk.jpg" height="120" alt="img_default" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="border-2 border-[#3bb77e] rounded-lg p-1" src="/images/walls.jpg" height="120" alt="img_default" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="border-2 border-[#3bb77e] rounded-lg p-1" src="/images/cornetto.jpg" height="120" alt="img_default" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="border-2 border-[#3bb77e] rounded-lg p-1" src="/images/merino.jpg" height="120" alt="img_default" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="border-2 border-[#3bb77e] rounded-lg p-1" src="/images/celano.jpg" height="120" alt="img_default" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="border-2 border-[#3bb77e] rounded-lg p-1" src="/images/haohao.jpg" height="120" alt="img_default" />
                </SwiperSlide>
                <SwiperSlide>
                    <img class="border-2 border-[#3bb77e] rounded-lg p-1" src="/images/gaudo.jpg" height="120" alt="img_default" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="section_product_tab mt-3 p-4 bg-[#f4f5f9]"> 
            <div class="mb-4 flex items-center justify-between">
                <h3 class="text-xl font-bold pb-3">
                    <nuxt-link to="/products/list">Sản phẩm nổi bật</nuxt-link>
                </h3>
                <ul 
                    class="flex items-center flex-nowrap -mb-px text-sm font-medium text-center min-h-[50px] max-w-[900px] overflow-x-auto" 
                    id="myTab" 
                    data-tabs-toggle="#myTabContent" 
                    role="tablist"
                >
                    <li  
                        v-for="(category,i) in categories" :key="i"
                        class="mr-2" 
                        role="presentation"
                    >
                    <button 
                        :class="{active: category.id==1}"
                        class="inline-block whitespace-nowrap bg-[#eee] py-[7px] px-[15px] rounded-[5px] text-[#444]" 
                        :id="'tab-button'+category.id" 
                        :data-tabs-target="'#tab-'+category.id" 
                        type="button" 
                        role="tab" 
                        :aria-controls="'tab-'+category.id" 
                        aria-selected="false"
                        @click="getIdCategory(category.id)"
                    >
                        {{ category.name }}
                    </button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                <div 
                    v-for="(category,i) in categories" :key="i"
                    class="hidden p-4 rounded-lg tab__content" 
                    :id="'tab-'+category.id" 
                    role="tabpanel"
                    :aria-labelledby="'tab-button'+category.id"
                >
                    <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
                        <div v-show="productsByCateId==''" class="col-span-5 p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50" role="alert">
                            <span class="font-medium">Không có sản phẩm nào trong danh mục này</span>
                        </div>
                        <div v-for="(product,index) in productsByCateId" :key="index">
                            <ProductCard :product="product" @addToCart="addToCart(product)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section_banner mt-3">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                <div class="flex items-center justify-center">
                    <img src="/images/feature_banner_1.jpg" class="rounded-md" alt="img_default">
                </div>
                <div class="flex items-center justify-center">
                    <img src="/images/feature_banner_2.jpg" class="rounded-md" alt="img_default">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "default"
    });

    const hours = ref<number>(24)
    const minutes = ref<number>(60)
    const seconds = ref<number>(60)
    const targetDate = ref<Date>(new Date('2023-12-31T00:00:00'))

    const tabs = ref<NodeListOf<Element> | undefined>()
    const tabsContent = ref<NodeListOf<Element> | undefined>()

    const show = ref(false)

    const countdown = () => {
        const intervalId = setInterval(() => {
            const now = new Date()
            const distance = targetDate.value.getTime() - now.getTime()
            if (distance < 0) {
                clearInterval(intervalId)
            } else {
                hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
            }
        }, 1000)
    }

    const getIdCategory = async (param: number) => {
      if(param) {
        const { data } = await useFetch('https://foody-9vwj.onrender.com/api/product/category/'+param)
        productsByCateId.value = data.value
      }
    }

    onMounted(()=>{
        countdown;
        

        tabs.value = document.querySelectorAll('#myTab button')
        tabsContent.value = document.querySelectorAll('#myTabContent>.tab__content')

        tabs.value?.forEach((tab, index) => {
            tab.addEventListener('click', function(this: HTMLButtonElement) {
                // Remove 'active' class from all tabs
                tabs.value?.forEach((tab) => {
                    tab.classList.remove('active')
                })
                // Add 'active' class to the clicked tab
                this.classList.add('active')

                // Hide all tab contents
                tabsContent.value?.forEach((tabContent) => {
                    tabContent.classList.add('hidden')
                })
                // Show the content of the clicked tab
                if(tabsContent.value) {
                    tabsContent.value[index].classList.remove('hidden')
                }
            })
        });
    });

    async function addToCart(product: object){
        show.value = true

        setTimeout(() => {
            show.value = false
            window.location.reload()
        }, 2000)

        const data = {
            productId: product,
            amount: 1
        }
        
        await useFetch(`https://foody-9vwj.onrender.com/api/cart-demo/add`, {
            method: "post",
            body: JSON.stringify(data)
        })
    }

    interface Category {
        id: number;
        name: string;
    }
    
    const {data: productsByCateId} = await useFetch('https://foody-9vwj.onrender.com/api/product/category/1');
    const {data: productsFlashSale} = await useFetch('/api/products/flash-sale');
    const {data} = await useFetch('/api/categories');
    const categories = data.value as Category[];
    
</script>

<style scoped>
.top {
    min-height: 1000px;
}

button.active {
    background-color: #3bb77e;
    color: #fff;
}

#myTab::-webkit-scrollbar {
    height: 6px;
}

</style>