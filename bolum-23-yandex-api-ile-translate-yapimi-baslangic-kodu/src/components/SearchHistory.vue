<template>
  <div class="well" v-if="history.length > 0">
    <h3>Arama Geçmişi</h3>
    <ul class="list-group text-left">
      <li class="list-group-item" v-for="itm in history" :key="itm.id">
        <div>
          <strong>{{ itm.from }} => {{ itm.to }}</strong>
        </div>
        <br />
        <div>
          <strong class="text-success">{{ itm.translateText }} : </strong>
          <span class="text-info">{{ itm.translatedText }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: ["history"],
  methods: {},
};
</script>

<style scoped>
.list-group-item{
margin-bottom: 10px;
}

</style>
