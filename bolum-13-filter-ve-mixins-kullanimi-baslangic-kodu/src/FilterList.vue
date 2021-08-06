<template>
  <div class="col-md-6 col-md-offset-3">
    <hr />
    <input type="text" v-model="searchText" />
    <ul>
      <li v-for="product in filtered" v-bind:key="product.id">{{ product }}</li>
    </ul>
  </div>
</template>

<script>
import { productMixin } from "./productMixin";
export default {
  mixins: [productMixin],
  created()
  {
    console.log("FilterList Created")
  }
};
</script>

<style></style>
