<template>
  <form @submit.prevent="translateIt" class="well">
    <textarea
      cols="30"
      rows="5"
      class="form-control"
      placeholder="Çevirmek istediğiniz kelime/cümle yazınız."
      v-model="translateText"
    ></textarea>
    <select v-model="translateTo" class="form-control">
      <option v-for="(value, key) in languages" :value="key" :key="key">
        {{ value }}
      </option>
    </select>
    <br />
    <div v-if="selectedLang" class="text-left">
      <strong>Tespit Edilen Dil : </strong>{{ selectedLang }}
    </div>
    <br />
    <button type="submit" class="btn btn-primary btn-block">Çeviriver!</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Test",
  created() {},
  data() {
    return {
      translateText: "",
      translateTo: "",
      languages: {},
      selectedLang: "",
    };
  },
  props: {},
  methods: {
    translateIt() {
      let url =
        "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20210907T091430Z.d1271b6d9da67e0e.e8de41689983ef424de28329241b07f948dd06aa&text=" +
        this.translateText +
        "&lang=" +
        this.translateTo;

      axios
        .get(url)
        .then((response) => {
          this.selectedLang = this.languages[this.translateTo];
          this.$emit("translatedEvent", response.data.text[0]);

          let history = {
            to: this.selectedLang,
            from: this.languages[response.data.lang.split("-")[0]],
            translateText: this.translateText,
            translatedText: response.data.text[0],
          };

          this.$emit("historyEvent", history);

          this.translateTo = "";
          this.translateText = "";
          //this.selectedLang = "";

          console.log(response);
          console.log(response.data.lang.split("-"));
        })
        .catch(() => {
          console.log(e);
        });
    },
  },
  created() {
    let url =
      "https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20210907T091430Z.d1271b6d9da67e0e.e8de41689983ef424de28329241b07f948dd06aa&ui=tr";

    axios
      .get(url)
      .then((response) => {
        this.languages = response.data.langs;

        console.log(response);
      })
      .catch(() => {
        console.log(e);
      });
  },
};
</script>

<style scoped></style>
