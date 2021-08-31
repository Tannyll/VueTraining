<template>
  <div>
    <p class="counter-container">Sayaç : {{ counter }}</p>
  </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
  //props: ["counter"],
  computed: {
    counter() {
      //return this.$store.state.counter * 5;
      return this.$store.getters.getDoubleCounter;
    },
  },
};
</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>
