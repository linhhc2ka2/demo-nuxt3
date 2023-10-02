<template>
    <!-- desktop -->
    <header class="lg:block hidden">
        <div class="grid grid-cols-12 gap-1 px-40">
            <div class="col-span-12 border-b flex items-center justify-between py-1">
                <nuxt-link to="/">Hệ thống cửa hàng</nuxt-link>
                <nuxt-link to="/">Yêu thích (0)</nuxt-link>
            </div>
            <div class="col-span-2 py-3">
                <h1 class="text-[#3bb77e] text-5xl font-bold"><nuxt-link to="/">FOODY</nuxt-link></h1>
            </div>
            <div class="col-span-6 py-3">
                <form-search/>
            </div>
            <div class="col-span-4 flex items-center justify-center py-3">
                <div class="flex items-center mx-3">
                    <i class="fa-solid fa-phone text-2xl me-2"></i>
                    <nuxt-link to="tel:0942859320">
                        <span class="block font-bold">Hotline</span>
                        <span class="block">0942859320</span>
                    </nuxt-link>
                </div>
                <div class="flex items-center mx-3">
                    <i class="fa-solid fa-user text-2xl me-2"></i>
                    <nuxt-link 
                        to="/" 
                        id="dropdownAccountBtn" 
                        data-dropdown-toggle="dropdownAccountHover" 
                        data-dropdown-trigger="hover"
                    >
                        <span class="block">Tài khoản</span>
                    </nuxt-link>
                    <!-- Dropdown menu -->
                    <div 
                        id="dropdownAccountHover" 
                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                        <ul 
                            class="py-2 text-sm text-gray-700 dark:text-gray-200" 
                            aria-labelledby="dropdownAccountBtn"
                        >
                            <li>
                                <nuxt-link 
                                    to="/login" 
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Đăng nhập
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link 
                                    to="/" 
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Đăng ký
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex items-center mx-3">
                    <i class="fa-solid fa-cart-shopping text-2xl me-2"></i>
                    <span 
                        class="hover:cursor-pointer"
                        data-drawer-target="drawer-right-example" 
                        data-drawer-show="drawer-right-example" 
                        data-drawer-placement="right" 
                        aria-controls="drawer-right-example"
                    >
                        Giỏ hàng
                    </span>
                </div>
            </div>
        </div>
        <div class="px-40 border-b">
            <navigation-v :navigations="navigations"/>
        </div>
    </header>
    <!-- desktop -->
    <!-- tablet - mb -->
    <header class="lg:hidden block px-2">
        <div class="grid grid-cols-5 gap-1">
            <div class="flex items-center justify-start ps-3 hover:cursor-pointer hover:text-[#3bb77e]">
                <i 
                    class="fa-solid fa-bars md:text-2xl text-xl"
                    data-drawer-target="drawer-bars" 
                    data-drawer-show="drawer-bars" 
                    aria-controls="drawer-bars"
                ></i>
                <!-- drawer component -->
                <div 
                    id="drawer-bars" 
                    class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full 
                    bg-white w-80 dark:bg-gray-800" 
                    tabindex="-1" 
                    aria-labelledby="drawer-label"
                >
                    <h5 
                        id="drawer-label" 
                        class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                    >
                        Menu
                    </h5>
                    <button type="button" data-drawer-hide="drawer-bars" aria-controls="drawer-bars" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close menu</span>
                    </button>
                    <div class="p-2">
                        <navigation-h :navigations="navigations" :id="'header'"/>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <nuxt-link 
                            to="/login" 
                            class="px-4 py-2 text-sm font-medium text-center text-white bg-[#3bb77e] border border-[#3bb77e] rounded-lg 
                            focus:outline-none hover:bg-[#266849] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200"
                        >
                            Đăng nhập
                        </nuxt-link>
                        <nuxt-link 
                            to="/" 
                            class="px-4 py-2 text-sm font-medium text-center text-white bg-[#3bb77e] border border-[#3bb77e] rounded-lg 
                            focus:outline-none hover:bg-[#266849] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200"
                        >
                            Đăng ký
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="col-span-3 flex items-center justify-center">
                <h1 class="text-[#3bb77e] md:text-5xl text-2xl font-bold"><nuxt-link to="/">FOODY</nuxt-link></h1>
            </div>
            <div class="flex items-center justify-end pe-3 hover:cursor-pointer hover:text-[#3bb77e]">
                <i 
                    class="fa-solid fa-cart-shopping md:text-2xl text-xl"
                    data-drawer-target="drawer-right-example" 
                    data-drawer-show="drawer-right-example" 
                    data-drawer-placement="right" 
                    aria-controls="drawer-right-example"
                ></i>
            </div>
        </div>
        <div class="p-3"><form-search/></div>
    </header>
    <!-- tablet - mb -->
    <!-- drawer component cart-->
    <div 
        id="drawer-right-example" 
        class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80" 
        tabindex="-1" 
        aria-labelledby="drawer-right-label"
    >
        <h5 
            id="drawer-right-label" 
            class="inline-flex items-center mb-4 text-base font-semibold text-gray-500"
        >
            Giỏ hàng
        </h5>
        <button 
            type="button" 
            data-drawer-hide="drawer-right-example" 
            aria-controls="drawer-right-example" 
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg 
            text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center" 
        >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close menu</span>
        </button>
        <div v-show="products!=''">
            <div class="p-[15px] overflow-y-auto card_body">
                <product-in-cart v-for="(product,i) in products" :key="i" :cart="product" />
            </div>
            <div class="p-[10px]">
                <hr>
                <div class="flex items-center justify-between">
                    <span class="text-[15px] font-medium">Tổng tiền:</span>
                    <span class="text-[#3bb77e]">{{ formatCurrency(totalMoney) }}</span>
                </div>
            </div>
            <button 
                @click="pay()"
                class="bg-[#3bb77e] border border-[#3bb77e] text-white p-2 w-full rounded-md 
                text-base font-bold hover:bg-[#2f9063]"
            >
                Thanh toán
            </button>
        </div>

        <div v-show="products==''" class="p-[15px] flex justify-center">
            <img src="/images/mobile-shopping.svg" width="200" height="200" alt="ico cart">
        </div>
    </div>
</template>

<script setup lang="ts">
    const {data: navigations} = await useFetch('/api/categories');
    const {data: products} = await useFetch(`https://foody-9vwj.onrender.com/api/cart-demo/${20}`);

    const totalMoney = ref<number>(0)

    const formatCurrency = (value: number) => {
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    
    const sum = (arr: []) => {
        totalMoney.value = arr.reduce(
            (sum, data) =>
                sum + data.amount * (data.productId.price - (data.productId.price * data.productId.discount) / 100),
            0,
        );
    }

    onMounted(()=>{
        sum(products.value);
    })

    const pay = async () => {
        const order = {
            code: 'DH - ' + new Date(),
            customerId: { id: 20 },
            status: 1,
            fullname: 'Linh',
            address: 'Cà Mau',
            phone: '0329497661',
            totalMoney: totalMoney.value,
            get orderDetail() {
                return products.value.map((item) => {
                    return {
                        productId: item.productId,
                        amount: item.amount,
                    };
                });
            },
        };
        
        await useFetch(`https://foody-9vwj.onrender.com/api/order/add`,{method: "post", body: JSON.stringify(order)});
        await useFetch(`https://foody-9vwj.onrender.com/api/cart-demo/delete-all`,{method: "delete"});
        window.location.reload()
    }
</script>

<style scoped>
.card_body {
    height: calc(100vh - 150px);
}
</style>