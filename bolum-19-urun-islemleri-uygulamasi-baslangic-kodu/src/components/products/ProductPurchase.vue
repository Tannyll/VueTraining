<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <input
              v-model="product.title"
              type="text"
              class="form-control"
              placeholder="Ürün adını giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              v-model="product.count"
              type="number"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input
              v-model="product.price"
              type="number"
              class="form-control"
              placeholder="Ürün fiyatı giriniz.."
            />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              v-model="product.decription"
              cols="30"
              rows="5"
              placeholder="Ürüne ait bir açıklama giriniz..."
              class="form-control"
            ></textarea>
          </div>
          <hr />
          <button class="btn btn-primary" :disabled="saveEnable" @click="saveProduct">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        decription: "",
        saveButtonClicked: false,
      },
    };
  },
  computed: {
    saveEnable() {
      if (
        this.product.title.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0 &&
        this.product.decription.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.product);
    if (
      (this.product.title.length > 0 ||
        this.product.count > 0 ||
        this.product.price > 0 ||
        this.product.decription.length > 0) &&
      !this.saveButtonClicked
    ) {
      if (confirm("Kaydedilmemiş değişiklikler var. Kesin Çıkacakmısın ?")) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
  methods: {
    saveProduct() {
      this.saveButtonClicked = true;
      this.$store.dispatch("saveProduct", this.product);
    },
  },
};
</script>

<style></style>
