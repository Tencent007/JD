<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //为了防止多次请求服务器造成资源浪费，选择在App.vue里面请求一次并存储在store里
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
