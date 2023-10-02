<template>
    <div class="relative">
        <input 
            type="text"
            class="w-full bg-[#f0f0f0] lg:min-h-[45px] md:min-h-[35px] min-h-[25px] border-0 rounded-md p-2 focus:outline-none focus:shadow-none" 
            placeholder="Bạn cần tìm gì?" 
            aria-describedby="basic-addon2" 
        />
        <span 
            class="absolute top-0 right-0 flex items-center justify-center px-3 lg:min-h-[45px] md:min-h-[35px] min-h-[40px] hover:cursor-pointer" 
            id="basic-addon2"
        >
            <i class="fa-solid fa-magnifying-glass text-[#141414] md:text-2xl text-xl hover:text-[#3bb77e]"></i>
        </span>
    </div>
</template>