<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      errorMessage: "",
      characters: [],
    };
  },
  methods: {
    async searchCharacters() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${this.searchQuery}`
        );
        this.characters = response.data.results;
        this.errorMessage = "";
      } catch (error) {
        this.characters = [];
        this.errorMessage =
          "An error occurred while fetching data. Please try again later.";
      }
    },
  },
  watch: {
    characters: function (newCharacters) {
      console.log("Characters changed:", newCharacters);
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="searchCharacters">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Enter character name"
      />
      <button type="submit">Search</button>
    </form>
    <div v-if="errorMessage">{{ errorMessage }}</div>

    <div v-if="characters.length > 0">
      <h2>Search Results</h2>
      <ul>
        <li v-for="character in characters" :key="character.id">
          {{ character.name }} - {{ character.species }} -
          {{ character.status }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
