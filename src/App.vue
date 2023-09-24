<script>
import axios from "axios";
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
    // Event handler to update characters data
    updateCharacters(characters) {
      this.characters = characters;
    },
    updateNextPage(nextPageUrl) {
      this.nextPage = nextPageUrl;
    },
    updatePrevPage(prevPageUrl) {
      this.prevPage = prevPageUrl;
    },
    loadNextPage(nextPageUrl) {
      if (nextPageUrl) {
        axios
          .get(nextPageUrl)
          .then((response) => {
            this.updateCharacters(response.data.results);
            this.updateNextPage(response.data.info.next);
            this.updatePrevPage(response.data.info.prev);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    loadPrevPage(prevPageUrl) {
      if (prevPageUrl) {
        axios
          .get(prevPageUrl)
          .then((response) => {
            this.updateCharacters(response.data.results);
            this.updateNextPage(response.data.info.next);
            this.updatePrevPage(response.data.info.prev);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
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
