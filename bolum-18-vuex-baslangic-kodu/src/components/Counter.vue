<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter(1)">
      + Arttır mapMutations
    </button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt mapMutations</button>
    <hr />
    <button class="btn btn-success" @click="increment(1)">+ Arttır dispatch</button>
    <button class="btn btn-danger" @click="decrement">- Azalt dispatch</button>
    <hr />
    <button class="btn btn-success" @click="incAsync({ time: 2500, count: 1 })">
      + Artır Async
    </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations(["increaseCounter", "decreaseCounter"]),
    ...mapActions(["increment", "decrement", "incAsync"]),
    // incrementCounter() {
    //   // this.$emit("counterEvent", 1);
    //   //this.$store.state.counter++;
    //   this.$store.commit("increaseCounter");
    // },
    // decrementCounter() {
    //   //this.$emit("counterEvent", -1);
    //   //this.$store.state.counter--;
    //   this.$store.commit("decreaseCounter");
    // },

    // increment() {
    //   this.$store.dispatch("increment");
    // },
    // decrement() {
    //   this.$store.dispatch("decrement");
    // },
    // incAsync() {
    //   this.$store.dispatch("incAsync");
    // },
  },
};
</script>

<style></style>
