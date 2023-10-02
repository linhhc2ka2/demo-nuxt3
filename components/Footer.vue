<template>
    <div class="mt-3">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:px-40 px-3 py-3 text-white font-medium bg-[#252b33] border-b-2 border-white">
            <div class="flex items-center justify-center">
                <img src="/images/footer_policy_img_1.png" width="50" height="50" class="me-2" alt="img_default" />    
                Đặt online giao tận nhà đúng giờ
            </div>
            <div class="flex items-center justify-center">
                <img src="/images/footer_policy_img_2.png" width="50" height="50" class="me-2" alt="img_default" />
                Đặt online giao tận nhà đúng giờ
            </div>
            <div class="lg:col-span-1 md:col-span-3 col-span-1 flex items-center justify-center">
                <img src="/images/footer_policy_img_3.png" width="50" height="50" class="me-2" alt="img_default" />
                Đặt online giao tận nhà đúng giờ
            </div>
        </div>
        <div class="bg-[#818181] flex items-center justify-center py-2">
            <span>Copyright by <a href="https://github.com/linhhc2ka2" class="text-white font-bold">linhhc2ka2</a></span>
            <a href="#" id="backtotop" class="backtop" title="Lên đầu trang">
                <i class="fa-solid fa-angles-up text-base text-[#3bb77e] hover:text-white"></i>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
  onMounted(() => {
    // Kiểm tra phần tử có tồn tại trong dom không
    if (process.client) {
      window.addEventListener('scroll', () => {
        const buttonBackToTop = document.getElementById('backtotop');
        if (buttonBackToTop) {
          if (window.scrollY >= 200) {
            buttonBackToTop.classList.add('show');
          } else {
            buttonBackToTop.classList.remove('show');
          }
        }
      });
    }
  });
</script>

<style scoped>
.backtop {
    position: fixed;
    top: initial !important;
    bottom: 80px;
    right: 36px;
    z-index: 99;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 19px;
    font-weight: bold;
    text-align: center;
    display: inline-block;
    color: #fff !important;
    border-radius: 5px;
    background-color: #e8f6ea;
    text-decoration: none;
    opacity: 0 !important;
    transition: all 0.3s;
}

.backtop:hover {
    background-color: var(--hover);
}

.show {
    opacity: 1 !important;
}
</style>