<template>
    <Alert v-if="show" />
    <div class="lg:px-40 px-3 flex items-center py-2">
        <nuxt-link to="/" class="font-bold">Trang chủ</nuxt-link>
        <span class="mx-2">/</span>
        <div class="text-[#3bb77e]">{{ route.params.name }}</div>
    </div>
    <div class="lg:px-40 px-3 bg-[#f4f5f9]">
        <div class="grid grid-cols-7 gap-4">
            <div class="col-span-2 lg:block hidden">
                <Menu :navigations="navigations" />
            </div>
            <div class="lg:col-span-5 col-span-7">
                <h3 class="md:text-3xl text-xl font-bold">{{route.params.name}}</h3>
                <Sort 
                    @sortPriceDesc="sortPriceDesc" @sortNameAsc="sortNameAsc" 
                    @sortNameDesc="sortNameDesc" @sortPriceAsc="sortPriceAsc" 
                />
                <div class="grid md:grid-cols-4 grid-cols-2 gap-4 py-3">
                    <div v-show="currentItems?.length == 0" class="col-span-5 p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50" role="alert">
                            <span class="font-medium">Không có sản phẩm nào trong danh mục này</span>
                        </div>
                    <div v-for="(product,i) in currentItems" :key="i">
                        <product-card :product="product" @addToCart="addToCart(product)" />
                    </div>
                    <div v-show="products?.length/itemsPerPage > 1" class="md:col-span-4 col-span-2">    
                        <nav aria-label="Page navigation example">
                        <ul class="flex items-center justify-center -space-x-px h-8 text-sm">
                            <li>
                                <button 
                                    @click="currentPage--"
                                    :disabled="currentPage - 1 == 0"
                                    class="flex items-center justify-center bg-[#d8fdd6] w-[36px] h-[36px] mx-[3px] 
                                    text-sm rounded-[5px] font-semibold hover:cursor-pointer hover:bg-[#3bb77e] hover:text-white"
                                >
                                    <i class="fa-solid fa-angle-left"></i>
                                </button>
                            </li>
                            <li v-show="currentPage - 1 > 0">
                                <button 
                                    @click="currentPage--"
                                    class="flex items-center justify-center bg-[#d8fdd6] w-[36px] h-[36px] mx-[3px] 
                                    text-sm rounded-[5px] font-semibold hover:cursor-pointer hover:bg-[#3bb77e] hover:text-white"
                                >
                                    {{ currentPage - 1 }}
                                </button>
                            </li>
                            <li>
                                <button 
                                    aria-current="page" 
                                    class="flex items-center justify-center w-[36px] h-[36px] mx-[3px] 
                                    text-sm rounded-[5px] font-semibold bg-[#3bb77e] text-white"
                                >
                                    {{ currentPage }}
                                </button>
                            </li>
                            <li v-show="currentPage + 1 < products?.length/itemsPerPage+1">
                                <button 
                                    @click="currentPage++"
                                    class="flex items-center justify-center bg-[#d8fdd6] w-[36px] h-[36px] mx-[3px] 
                                    text-sm rounded-[5px] font-semibold hover:cursor-pointer hover:bg-[#3bb77e] hover:text-white"
                                >
                                    {{ currentPage + 1 }}
                                </button>
                            </li>
                            <li>
                                <button 
                                    @click="currentPage++"
                                    :disabled="currentPage + 1 > products?.length/itemsPerPage"   
                                    class="flex items-center justify-center bg-[#d8fdd6] w-[36px] h-[36px] mx-[3px] 
                                    text-sm rounded-[5px] font-semibold hover:cursor-pointer hover:bg-[#3bb77e] hover:text-white"
                                >
                                    <i class="fa-solid fa-angle-right"></i>
                                </button>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <!-- tablet/mb -->
        <button 
            class="fixed left-0 top-[30%] bg-[#3bb77e] text-white py-1 px-2 rounded-tr rounded-br lg:hidden block"
            data-drawer-target="drawer-menu-products-id" 
            data-drawer-show="drawer-menu-products-id" 
            aria-controls="drawer-menu-products-id"
        >
            <i class="fa-solid fa-gear text-lg"></i>
        </button>
        <!-- drawer component -->
        <div 
            id="drawer-menu-products-id" 
            class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full 
            bg-white w-80" 
            tabindex="-1" 
            aria-labelledby="drawer-label"
        >
            <h5 
                id="drawer-label" 
                class="inline-flex items-center mb-4 text-base font-semibold text-gray-500"
            >
                Filter and Sort
            </h5>
            <button type="button" data-drawer-hide="drawer-menu-products-id" aria-controls="drawer-menu-products-id" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center" >
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <div class="p-2">
                <Menu :navigations="navigations" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'

export default {
    setup() {
        definePageMeta({
            layout: "default"
        })
        const route = useRoute();
        
        
        const {data: navigations} = useFetch('/api/categories');
        const {data: products} = useFetch(`https://foody-9vwj.onrender.com/api/product/category/${route.params.id}`);
        
        const currentPage = ref(1);
        const itemsPerPage = ref(8);

        const show = ref(false);

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

        const sortNameAsc = () => {
            if(Array.isArray(products.value)){
                products.value.sort((a, b) => {
                    if (a.name < b.name) {return -1;}
                    if (a.name > b.name) {return 1;}
                    return 0;
                });
            }
        }
        
        const sortNameDesc = () => {
            if(Array.isArray(products.value)){
                products.value.sort((a, b) => {
                    if (a.name < b.name) {return 1;}
                    if (a.name > b.name) {return -1;}
                    return 0;
                });
            }
        }
        
        const sortPriceAsc = () => {
            if(Array.isArray(products.value)){
                products.value.sort((a, b) => (a.price - a.price*a.discount/100) - (b.price - b.price*b.discount/100));
            }
        }
        
        const sortPriceDesc = () => {
            if(Array.isArray(products.value)){
                products.value.sort((a, b) => (b.price - b.price*b.discount/100) - (a.price - a.price*a.discount/100));
            }
        }

        const currentItems = computed(() => {
            if(Array.isArray(products.value)){
                const start = (currentPage.value - 1) * itemsPerPage.value;
                return products.value.slice(start, start + itemsPerPage.value);
            }
        });

        return {
            route,
            navigations,
            products,
            currentPage,
            itemsPerPage,
            currentItems,
            sortNameAsc,
            sortNameDesc,
            sortPriceAsc,
            sortPriceDesc,
            show,
            addToCart
        };
    },
};
</script>