<template>
  <div class="col-12 col-md-4">
    <div class="card">
        <div class="item-img">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUmzpKgqLcMPvNiLLgovFlZ4wXmOb3slYSu9IikxAvTvMTfiwLT-p1ZP96XPnvIDZ9cPc1eMgQ7obcthhnkBjPRk_e1hMbUkp_H_INbvSurAUDs2YMLnfALwN74yroIo884i6j7z70FzUERr_uPpi6DiZRik2tfB1cUvPl8fGB9sr4jd_4SKKhPtI6Dw/s320/Frog_1.png" class="card-img-top" alt="">
        </div>
        <div class="card-body ">
          <p class="card-text fs-5">Item Name</p>
          <p class="card-text fs-5">$999</p>
          <div class="d-flex justify-content-end">
            <button class="btn btn-secondary ">去蝦皮看看</button>
          </div>
           
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return {
      // images: url(''),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .card:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }
    /* .item-img{
        width: 100%;
    } */
    .card-img-top{
        width: 100%;
        height: 20rem;
        object-fit:  scale-down;
    }

    .bi-star-fill {
    color: rgb(255, 208, 0);
    }

</style>
