import VueRouter from 'vue-router';
import ProductPurchase from "./components/products/ProductPurchase.vue";
import ProductSell from "./components/products/ProductSell.vue";
import ProductList from "./components/products/ProductList.vue";


const router = [{
    path: "/",
    component: ProductList,
}, {
    path: "/urun-islemleri",
    component: ProductPurchase,
}, {
    path: "/urun-cikisi",
    component: ProductSell,
}, {
    path: "*",
    redirect: "/",
}, ]

export const router = new VueRouter({
    mode: "history",
    router
})