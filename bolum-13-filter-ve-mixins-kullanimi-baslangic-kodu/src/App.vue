<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>

        <p>{{ message | toUppercase | toLowercase }}</p>
        <hr />
        <button class="btn brn-primary" @click="products.push('Tanker')">Ürün Ekle</button>
        <input type="text" v-model="searchText" />
        <ul>
          <li v-for="product in filtered" v-bind:key="product.id">{{ product }}</li>
        </ul>
      </div>
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import FilterList from "./FilterList.vue";
import { productMixin } from "./productMixin";
export default {
  mixins: [productMixin],
  components: {
    appList: FilterList,
  },
  data() {
    return {
      searchText: "",
      message: "Selamlar Öğrenciler",
      products: ["Ekran", "Bilgisayar", "Mouse", "Doktor", "Hastane"],
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  created() {
    console.log("App.vue created");
  },
};
</script>

<style></style>
