<template>
  <div class="tag-container">
    <Tags v-model="tags" color="success" />
    {{ tags }}
    <Tags v-model="tags1" color="danger" />
    {{ tags1 }}
    <Tags v-model="tags2" color="secondary" />
    {{ tags2 }}
    <Tags v-model="tags3" color="info" />
    {{ tags3 }}
    <Tags v-model="tags4" />
    {{ tags4 }}
  </div>
</template>

<script>
import Tags from "./components/Tags.vue";
export default {
  components: {
    Tags,
  },
  data() {
    return {
      tags: "Vue, Angular, React",
      tags1: "C#, Java, Python",
      tags2: "JavaScript, Dart",
      tags3: "Swift, Objective",
      tags4: "SQL, TSQL",
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
