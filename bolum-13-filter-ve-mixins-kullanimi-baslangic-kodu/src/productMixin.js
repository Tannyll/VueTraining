export const productMixin = {
    data() {
        return {
            searchText: "",
            products: ["Ekran", "Bilgisayar", "Mouse", "Doktor", "Hastane"],
        };
    },
    computed: {
        filtered() {
            return this.products.filter((element) => {
                return element.match(this.searchText);
            });
        },
    },
    created() {
        console.log("mixin created")
    },
}