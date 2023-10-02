<template>
    <div class="lg:px-40 px-3 flex items-center py-2 bg-white">
        <nuxt-link to="/" class="font-bold">Trang chủ</nuxt-link>
        <span class="mx-2">/</span>
        <div class="text-[#3bb77e]">Đăng ký tài khoản</div>
    </div>
    <div class="lg:px-40 px-3">
        <div class="bg-[#f4f6f8] p-[24px] rounded-[24px]">
            <h1 class="font-bold text-xl">Đăng ký tài khoản</h1>
            <div class="my-3">
                <label class="font-bold block mb-2"> Họ <span class="text-red-600">*</span></label>
                <input 
                    type="text" 
                    class="w-full bg-white border-0 rounded text-sm 
                    focus:ring-0 focus:shadow-none focus:outline-none"
                >
            </div>
            <div class="mb-3">
                <label class="font-bold block mb-2"> Tên <span class="text-red-600">*</span></label>
                <input 
                    type="text" 
                    class="w-full bg-white border-0 rounded text-sm 
                    focus:ring-0 focus:shadow-none focus:outline-none"
                >
            </div>
            <div class="mb-3">
                <label class="font-bold block mb-2"> Email <span class="text-red-600">*</span></label>
                <input 
                    type="email" 
                    class="w-full bg-white border-0 rounded text-sm 
                    focus:ring-0 focus:shadow-none focus:outline-none"
                >
            </div>
            <div class="mb-3">
                <label class="font-bold block mb-2"> Số điện thoại <span class="text-red-600">*</span></label>
                <input 
                    type="text" 
                    class="w-full bg-white border-0 rounded text-sm 
                    focus:ring-0 focus:shadow-none focus:outline-none"
                >
            </div>
            <div class="my-3">
                <label class="font-bold block mb-2"> Mật khẩu <span class="text-red-600">*</span></label>
                <input 
                    type="password" 
                    class="w-full bg-white border-0 rounded text-sm 
                    focus:ring-0 focus:shadow-none focus:outline-none"
                >
            </div>
            <div class="text-center pt-3">
                <button 
                    class="bg-[#3bb77e] border border-[#3bb77e] text-white p-2 w-1/2 rounded-md 
                    text-base font-bold hover:bg-[#2f9063]"
                >
                    Đăng ký
                </button>
            </div>
        </div>
    </div>
</template>