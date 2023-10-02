<template>
    <div class="lg:px-40 px-3 flex items-center py-2 bg-white">
        <nuxt-link to="/" class="font-bold">Trang chủ</nuxt-link>
        <span class="mx-2">/</span>
        <div class="text-[#3bb77e]">Đăng nhập tài khoản</div>
    </div>
    <div class="lg:px-40 px-3">
        <div class="bg-[#f4f6f8] p-[24px] rounded-[24px]">
            <h1 class="font-bold text-xl">Đăng nhập tài khoản</h1>
            <div class="my-3">
                <label class="font-bold block mb-2"> Email <span class="text-red-600">*</span></label>
                <input 
                    type="email" 
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
            <div class="text-end">
                <nuxt-link to="/forgot-password" class="text-[#3bb77e] hover:text-[#444]">Quên mật khẩu</nuxt-link>
                <span class="block">
                    Tạo tài khoản mới 
                    <nuxt-link to="/sign-up" class="text-[#3bb77e] hover:text-[#444]">tại đây</nuxt-link>.
                </span>
            </div>
            <div class="text-center pt-3">
                <button 
                    class="bg-[#3bb77e] border border-[#3bb77e] text-white p-2 w-1/2 rounded-md 
                    text-base font-bold hover:bg-[#2f9063]"
                >
                    Đăng nhập
                </button>
            </div>
        </div>
    </div>
</template>