<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr />
    <p>Ad: {{ $route.query.name }}</p>
    <p>Yaş: {{ $route.query.age }}</p>
    <button class="btn btn-primary" @click="saved = true">Onayla</button>
    <div style="height: 800px"></div>
    <p id="data">Burada gelecek bilgiler</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      saved: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.saved) {
      next();
    } else {
      if (confirm("Veriler kayıt yapılmadı. Çıkmak istediğinizden eminmisiniz?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>
