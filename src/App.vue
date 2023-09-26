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
        try {
          const response = await fetchCharacters(nextPageUrl);
          this.updateCharacters(response.results);
          this.updateNextPage(response.info.next);
          this.updatePrevPage(response.info.prev);
          window.scrollTo({
            top: 0,
          });
        } catch (error) {
          console.error("Error loading next page:", error);
        }
      }
    },

    async loadPrevPage(prevPageUrl) {
      if (prevPageUrl) {
        try {
          const response = await fetchCharacters(prevPageUrl);
          this.updateCharacters(response.results);
          this.updateNextPage(response.info.next);
          this.updatePrevPage(response.info.prev);
          window.scrollTo({
            top: 0,
          });
        } catch (error) {
          console.error("Error loading previous page:", error);
        }
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>Rick and Morty Character Search</h2>
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
      @prevPage="loadPrevPage"
    />
  </div>
</template>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 30px;
  color: rgb(232, 232, 232);
  padding: 24px;
}
</style>
