<template>
  <ul class="nav nav-pills">
    <router-link tag="li" to="/" exact active-class="active"><a>Home</a></router-link>
    <router-link tag="li" to="/user" active-class="active"><a>User</a></router-link>
  </ul>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="" scoped></style>
