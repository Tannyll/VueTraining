<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />
    <p>Kullanıcı Id : {{ $route.params.id }}</p>
    <router-link
      :to="'/user/' + $route.params.id + '/edit'"
      tag="button"
      class="btn btn-primary"
      >Düzenle String</router-link
    >
    <router-link
      :to="{ name: 'userEdit', params: { id: $route.params.id } }"
      tag="button"
      class="btn btn-primary"
      >Düzenle $route</router-link
    >
    <router-link
      :to="{
        name: 'userEdit',
        params: { id: $route.params.id },
        query: { name: 'serdar', age: '39' },
      }"
      tag="button"
      class="btn btn-primary"
      >Düzenle Query</router-link
    >
    <router-link :to="navigationLink" tag="button" class="btn btn-primary"
      >Düzenle Hash Fragment</router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigationLink: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { name: "serdar", age: "39" },
        hash: "#data",
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
};
</script>
