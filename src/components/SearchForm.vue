<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      errorMessage: "",
      nextPageUrl: "",
      prevPageUrl: "",
      characters: [],
    };
  },
  methods: {
    async searchCharacters() {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${this.searchQuery}`
        );
        console.log(response, "response");
        this.errorMessage = "";
        this.characters = response.data.results;
        this.nextPageUrl = response.data.info.next;
        this.prevPageUrl = response.data.info.prev;
        this.$emit("characters-updated", this.characters);
        this.$emit("nextPage", this.nextPageUrl);
        this.$emit("prevPage", this.prevPageUrl);
      } catch (error) {
        this.characters = [];
        this.errorMessage =
          "An error occurred while fetching data. Please try again later.";
      }
    },
  },
};
</script>

<template>
  <div className="container">
    <div className="formWrapper">
      <form @submit.prevent="searchCharacters">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Enter character name"
        />
        <button type="submit">Search</button>
      </form>
      <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
}
.formWrapper {
  width: 50%;
}

h2 {
  font-size: 20px;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  font-size: 16px;
}

/* Input and Button Styles */
form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
