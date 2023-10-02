<template>
    <div class="lg:px-40 px-3 flex items-center py-2 bg-white">
        <nuxt-link to="/" class="font-bold">Trang chủ</nuxt-link>
        <span class="mx-2">/</span>
        <div class="text-[#3bb77e]">Lấy lại mật khẩu</div>
    </div>
    <div class="lg:px-40 px-3">
        <div class="bg-[#f4f6f8] p-[24px] rounded-[24px]">
            <h1 class="font-bold text-xl">Lấy lại mật khẩu</h1>
            <div class="my-3">
                <label class="font-bold block mb-2"> Email <span class="text-red-600">*</span></label>
                <input 
                    type="email" 
                    class="w-full bg-white border-0 rounded text-sm 
                    focus:ring-0 focus:shadow-none focus:outline-none"
                >
            </div>
            <div class="flex items-center pt-3">
                <div class="pe-2 w-1/2">
                    <button 
                        class="bg-[#3bb77e] border border-[#3bb77e] text-white p-2 rounded-md 
                        text-base font-bold hover:bg-[#2f9063] w-full"
                    >
                        Xác nhận
                    </button>
                </div>
                <div class="ps-2 w-1/2">
                    <nuxt-link
                        to="/login" 
                        class="bg-white border border-[#3bb77e] text-[#3bb77e] p-2 rounded-md 
                        text-base font-bold hover:bg-[#2f9063] hover:text-white w-full block text-center"
                    >
                        Quay lại
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>