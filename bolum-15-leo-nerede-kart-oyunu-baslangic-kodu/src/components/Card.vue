<template>
  <div class="card">
    <img :src="card.image" alt="" />
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: ["card"],
  methods: {},
};
</script>

<style lang="" scoped>
.card {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid #666;
  transition: box-shadow 0.5s;
  margin-left: 15px;
}
.card:first-child {
  margin-left: 0px;
}
.card:hover {
  box-shadow: 0px 5px 48px #666;
  transition: box-shadow 0.5s;
}

.card img {
  width: 100%;
  height: 100%;
}
</style>
