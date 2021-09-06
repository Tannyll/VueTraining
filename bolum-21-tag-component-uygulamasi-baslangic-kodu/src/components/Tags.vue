<template>
  <div class="tag-container">
    <Tag
      v-for="(tag, index) in tags"
      :key="tag.id"
      :tag="tag"
      :index="index"
      :tagColor="color"
      @removeSingleTagEvent="removeSingleTag($event)"
    />
    <input type="text" @keydown.backspace="removeTag" @keydown.enter="addTag" />
    <div class="error" v-if="error">Bu etkiket mevcut</div>
  </div>
</template>
<script>
import Tag from "./Tag.vue";
export default {
  components: {
    Tag,
  },
  methods: {
    addTag(event) {
      let text = event.target;

      let matchedTag = false;

      if (text.value.length > 0) {
        this.tags.forEach((tag) => {
          if (tag.toLowerCase() === text.value.toLowerCase()) {
            matchedTag = true;
          }
        });

        if (!matchedTag) {
          this.tags.push(text.value);

          text.value = "";
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
      }
    },
    removeTag(e) {
      if (e.target.value <= 0) {
        this.tags.splice(this.tags.length - 1, 1);
      }
    },
    removeSingleTag(index) {
      this.tags.splice(index, 1);
    },
  },
  data() {
    return {
      tags: [],
      error: false,
    };
  },
  props: {
    value: {
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
  },
  created() {
    if (this.value) {
      if (this.value.length > 0) {
        this.tags = this.value.split(",");
      }
    }
  },
  watch: {
    tags() {
      this.$emit("input", this.tags.join(","));
    },
  },
};
</script>

<style scoped>
.tag-container {
  border: 1px solid #ccc;
  padding: 20px;
}

input {
  outline: none;
  height: 30px;
  width: 100px;
}

.error {
  font-size: 12px;
  color: red;
  margin-top: 5px;
}
</style>
