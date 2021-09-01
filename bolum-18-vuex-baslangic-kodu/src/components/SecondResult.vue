<template>
  <div>
    <p class="counter-container">Sayaç : {{ doubleC }}</p>
    <p class="counter-container">Tıklama : {{ stringC }}</p>
    <br />
    <input type="text" v-model="value" />

    <p>{{ value }}</p>
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
    value: {
      get() {
        return this.$store.getters.getValue;
      },
      set(value) {
        this.$store.dispatch("setValueData", value);
      },
    },
  },
  methods: {
    // setValue(event) {
    //   this.$store.dispatch("setValueData", event.target.value);
    // },
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
