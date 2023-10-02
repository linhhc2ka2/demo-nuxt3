<template>
    <div class="grid grid-cols-5 py-3">
        <div class="col-span-1 flex items-center justify-center">
            <img :src="`/images/${cart.productId.image}`" alt="">
        </div>
        <div class="col-span-4">
            <a :href="`/`" class="text-[13px] font-medium">{{ cart.productId.name }}</a>
            <div class="grid grid-cols-2 gap-1">
                <div class="flex flex-col items-center">
                    <span class="text-xs text-start w-full">Số lượng</span>
                    <div class="flex items-center mt-2">
                        <button 
                            @click="cart.amount=cart.amount-1;update(cart)" 
                            class="bg-[#f4f5f9] py-1 px-2 text-xs rounded-tl rounded-bl"
                        >
                            -
                        </button>
                        <input type="text" name="" id="" 
                            class="w-[50px] border-0 border-transparent bg-[#f4f5f9] py-1 px-2 text-xs text-center
                            focus:outline-none focus:shadow-none focus:border-transparent focus:ring-0"
                            :value="cart.amount"
                        >
                        <button 
                            @click="cart.amount=cart.amount+1;update(cart)" 
                            class="bg-[#f4f5f9] py-1 px-2 text-xs rounded-tr rounded-br"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div class="flex flex-col items-center text-[#3bb77e]">
                    <span class="text-sm text-end w-full font-medium">
                        {{ formatCurrency(cart.productId.price) }}
                    </span>
                    <span @click="deleteItem(cart.id)" class="text-sm text-end w-full hover:cursor-pointer">Bỏ sản phẩm</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const {cart} = defineProps(['cart']);

    const formatCurrency = (value: number) => {
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    const update = async (param: object): Promise<void> => {
        if (param.amount > 0) {
            await useFetch(`https://foody-9vwj.onrender.com/api/cart-demo/update`, {
                method: "put",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            })
        } else {
            await useFetch(`https://foody-9vwj.onrender.com/api/cart-demo/delete/${param.id}`, {
                method: "delete"
            });
        }
        window.location.reload()
    }

    const deleteItem = async (id: number): Promise<void> => {
        await useFetch(`https://foody-9vwj.onrender.com/api/cart-demo/delete/${id}`, {
            method: "delete"
        });
        window.location.reload()
    }
</script>

<style lang="scss" scoped>

</style>