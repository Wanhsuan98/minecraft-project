<template>
  <div class="server d-flex justify-content-center" style="">
<!-- <img class="" style="" src="" alt=""> -->
<!-- <p class="">aaa</p> -->
<div class="domainOutside pt-md-4 pt-sm-5" style="height: 27px;">
  <span class="text-light mx-3" style="z-index:10">{{ domains }}</span>
  <span class="btn bg-transparent btn-sm text-light border-start" @click.stop.prevent="copy">
            Copy
        </span>

  <input type="hidden" ref="getCopy" value="" :value="domains" class="bg-dark text-light domain-input" style="width:220px">

</div>
</div>
</template>

<script setup>
import { ref } from 'vue'
let domains = ref('https://www.google.com/')
const getCopy = ref(null)
let copy = () => {
    //改變性質變成text，hidden無法複製
    getCopy.value.setAttribute('type', 'text')
    //select()為選取範圍
    getCopy.value.select()
    document.execCommand('copy');
    //單純的alert可以關掉
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? '複製成功' : '複製失敗';
        alert('伺服器位置' + msg);
    } catch (err) {
        alert('Oops, unable to copy');
    }
    /* 讓該input變回hidden 取消選取 */
    getCopy.value.setAttribute('type', 'hidden')
    window.getSelection().removeAllRanges()
}
</script>

<style scoped>
/* .domainOutside{
height: 27px;
padding-top: 1.2rem
}
@media handheld,screen and(max-width: 768px) {
.domainOutside{
padding-top:2rem
}    
} */
</style>