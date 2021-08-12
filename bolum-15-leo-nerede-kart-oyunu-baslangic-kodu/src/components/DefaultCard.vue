<template>
  <div class="card"></div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {
     
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="" scoped>
.card {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid #666;
  margin-left: 10px;
  background-image: url("../assets/vue-js-egitim-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 9px 55px #666;
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
