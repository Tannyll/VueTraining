<template>
  <div>
    <p class="counter-container">Sayaç : {{ doubleC }}</p>
    <p class="counter-container">Tıklama : {{ stringC }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  //props: ["counter"],
  //spread operator
  computed: {
    ...mapGetters({
      doubleC: "getDoubleCounter",
      stringC: "getStringCounter",
    }),
  },
  methods: {},
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
