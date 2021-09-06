<template>
  <div class="tag-container">
    <vtag v-model="tags" color="success" />
    {{ tags }}
    <vtag v-model="tags1" color="danger" />
    {{ tags1 }}
    <vtag v-model="tags2" color="secondary" />
    {{ tags2 }}
    <vtag v-model="tags3" color="info" />
    {{ tags3 }}
    <vtag v-model="tags4" />
    {{ tags4 }}
  </div>
</template>

<script>
export default {
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
