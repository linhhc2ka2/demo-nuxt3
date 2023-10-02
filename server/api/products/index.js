export default defineEventHandler(async (e)=>{
    const uri = "https://foody-9vwj.onrender.com/api/product";

    const data = await $fetch(uri);

    return data;
})