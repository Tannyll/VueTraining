<template>
  <div class="container-fluid p-0">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Header from "./components/Header";
// TODO : AXIOS https://github.com/axios/axios
export default {
  components: {
    appHeader: Header,
  },
};
</script>
<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
}
</style>
