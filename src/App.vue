<template>
  <div class="app">
    <Header/>
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useStore } from 'vuex';
import Header from "./components/header/header.vue"
import Footer from "./components/footer/footer.vue"
let Common = inject('Common')
console.log(Common)
console.log(process.env.VUE_APP_BASE_API)
const store = useStore();
store.dispatch('getNavList');
store.dispatch('getSwiper');
</script>

<style lang="scss">
#app,
html,
body,
.app{
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.app{
  padding-top: 80px;
  main{
    width: 100%;
  }
}
</style>
