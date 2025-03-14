<template>
  <div class="container-fluid">
    <h2>最新消息</h2>
    <div class="row jacordian d-flex justify-content-center">
      <singleNews v-for="text of texts" :key="text.id" :text="text" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";
import singleNews from "../components/singleNews.vue";

export default {
  components: {
    singleNews,
  },
};
</script>

<style></style>
