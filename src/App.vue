<script>
import { fetchCharacters } from "./helpers";
import PaginationButtons from "./components/PaginationButtons.vue";
import SearchForm from "./components/SearchForm.vue";
import SearchResults from "./components/SearchResults.vue";
export default {
  components: {
    SearchForm,
    SearchResults,
    PaginationButtons,
  },
  data() {
    return {
      characters: [],
      nextPage: "",
      prevPage: "",
    };
  },
  methods: {
    updateCharacters(characters) {
      this.characters = characters;
    },
    updateNextPage(nextPageUrl) {
      this.nextPage = nextPageUrl;
    },
    updatePrevPage(prevPageUrl) {
      this.prevPage = prevPageUrl;
    },
    async loadNextPage(nextPageUrl) {
      if (nextPageUrl) {
        const response = await fetchCharacters(nextPageUrl);
        this.updateCharacters(response.data.results);
        this.updateNextPage(response.data.info.next);
        this.updatePrevPage(response.data.info.prev);
      }
    },
  },
  async loadPrevPage(prevPageUrl) {
    if (prevPageUrl) {
      const response = await fetchCharacters(prevPageUrl);
      this.updateCharacters(response.data.results);
      this.updateNextPage(response.data.info.next);
      this.updatePrevPage(response.data.info.prev);
    }
  },
};
</script>

<template>
  <div>
    <h2>Rick and Morty Character Lookup</h2>
    <SearchForm
      @characters-updated="updateCharacters"
      @nextPage="updateNextPage"
      @prevPage="updatePrevPage"
    />
    <SearchResults :characters="characters" />
    <PaginationButtons
      v-if="characters.length !== 0"
      :nextPage="nextPage"
      :prevPage="prevPage"
      @nextPage="loadNextPage"
      @prevPage="loadNextPage"
    />
  </div>
</template>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  color: rgb(232, 232, 232);
  padding: 24px;
}
</style>
