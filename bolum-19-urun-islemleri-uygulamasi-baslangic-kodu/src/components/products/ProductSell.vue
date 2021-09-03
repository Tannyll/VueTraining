<template>
  <div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <select
              class="form-control"
              v-model="selectedProduct"
              @change="productSelected"
            >
              <option selected disabled>Ürün Seç</option>
              <option
                :disabled="product.count == 0"
                v-for="product in getProducts"
                :key="product.key"
                :value="product.key"
              >
                {{ product.title }}
              </option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product !== null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info">{{ product.price | currency }}</span>
                      <span class="badge badge-primary">{{ product.count }}</span>
                    </div>
                    <p class="border border-warning p-2 text-secondary">
                      {{ product.decription | truncate(600) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <div class="form-group">
            <label>Adet</label>
            <input
              v-model="product_count"
              type="text"
              class="form-control"
              :class="maxProductCount()"
              placeholder="Ürün adetini giriniz.."
            />
          </div>
          <hr />
          <button @click="save" :disabled="saveEnable" class="btn btn-primary">
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedProduct: null,
      product: null,
      product_count: null,
      saveButtonClicked: false,
    };
  },
  methods: {
    productSelected() {
      console.log(this.selectedProduct);
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
      console.log(this.product[0]);
    },
    save() {
      this.saveButtonClicked = true;

      let product = {
        key: this.selectedProduct,
        count: this.product_count,
      };

      this.$store.dispatch("saleProduct", product);
    },
    maxProductCount() {
      if (this.product === null) {
        return "";
      } else {
        return {
          "border-danger": this.product_count === 0,
          "border-danger": this.product_count > this.product.count,
        };
      }
    },
  },
  computed: {
    ...mapGetters(["getProducts"]),
    saveEnable() {
      if (this.selectedProduct !== null && this.product_count > 0) {
        return false;
      } else {
        return true;
      }
    },
    isLoading() {
      if (this.saveButtonClicked) {
        return { display: "block" };
      } else {
        return { display: "none" };
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.product);
    if (this.product !== null) {
      if (
        (this.selectedProduct !== null || this.product.count > 0) &&
        !this.saveButtonClicked
      ) {
        if (confirm("Kaydedilmemiş değişiklikler var. Kesin Çıkacakmısın. ?")) {
          next();
        } else {
          next(false);
        }
      } else {
        next();
      }
    }
    next();
  },
};
</script>

<style scope>
.border-danger {
  border-style: dashed !important;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0s ease-out;
  opacity: 0;
}
</style>
