<template>
  <span class="tag" :class="selectedTheme">
    <span class="content">{{ tag }}</span>
    <span class="close" @click="$emit('removeSingleTagEvent', index)">X</span>
  </span>
</template>

<script>
export default {
  name: "Test",
  created() {
    this.selectedTheme = this.tagColor;
  },
  data() {
    return {
      selectedTheme: null,
    };
  },
  props: ["tag", "index", "tagColor"],
  methods: {},
};
</script>

<style lang="" scoped>
.primary {
  background-color: gray;
  color: black;
}
.success {
  background-color: aqua;
  color: black;
}
.danger {
  background-color: red;
  color: black;
}
.secondary {
  background-color: yellow;
  color: black;
}
.info {
  background-color: blueviolet;
  color: black;
}
.tag {
  padding: 10px;
  border-radius: 5px;
  cursor: default;
  margin-right: 10px;
}
.tag * {
  font-size: 14px;
}

.tag .close {
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
}
</style>
