<template>
  <div>
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer.vue";
// import ProductPurchase from "./components/products/ProductPurchase.vue";
// import ProductSell from "./components/products/ProductSell.vue";
// import ProductList from "./components/products/ProductList.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
  created() {
    this.$store.dispatch("initApp");
    this.$store.dispatch("getTradeResult");
  },
};
</script>

<style>
body {
  background-color: #a7a0bb5c;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0s ease-out;
  opacity: 0;
}
</style>
