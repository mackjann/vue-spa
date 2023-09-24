<script>
import SearchForm from "./components/SearchForm.vue";
export default {
  components: {
    SearchForm,
  },
};
</script>

<template>
  <div>
    <h2>Rick and Morty Character Lookup</h2>
    <SearchForm />
  </div>
</template>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
  font-family: sans-serif;
}
</style>
