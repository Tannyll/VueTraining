<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr />
        <button class="btn btn-primary" @click="show = !show">Göster/Gizle</button>

        <br /><br />
        <transition>
          <div class="alert alert-success" v-if="show">Bu alert kutusu</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style></style>
