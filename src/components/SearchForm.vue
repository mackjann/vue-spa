<script>
import { fetchCharacters } from "../helpers";

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
      // Clear previous error message and results
      this.errorMessage = "";
      this.characters = [];
      this.$emit("characters-updated", this.characters);

      if (this.searchQuery.trim() === "") {
        this.errorMessage = "Please enter a character name to search";
        return;
      }

      try {
        const url = `https://rickandmortyapi.com/api/character/?name=${this.searchQuery}`;
        const response = await fetchCharacters(url);

        // Handle specific error for 404 status
        if (response.error === "No characters found") {
          this.errorMessage = response.error;
        } else {
          this.characters = response.results;
          this.nextPageUrl = response.info.next;
          this.prevPageUrl = response.info.prev;
          this.$emit("characters-updated", this.characters);
          this.$emit("nextPage", this.nextPageUrl);
          this.$emit("prevPage", this.prevPageUrl);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    clearResults() {
      this.errorMessage = "";
      this.searchQuery = "";
      this.characters = [];
      this.$emit("characters-updated", this.characters);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="formWrapper">
      <form @submit.prevent="searchCharacters">
        <input
          class="searchBox"
          v-model="searchQuery"
          type="text"
          placeholder="Enter character name"
        />
        <div class="buttonGroup">
          <button type="submit">Search</button>
          <button type="button" @click="clearResults">Clear</button>
        </div>
      </form>
      <div v-if="errorMessage">
        <p class="errorMessage">{{ errorMessage }}</p>
      </div>
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

.searchBox {
  width: 100%;
}

.buttonGroup {
  display: flex;
}

.errorMessage {
  color: rgb(216, 216, 216);
  font-family: sans-serif;
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

button[type="button"] {
  background-color: #da0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
}

button[type="button"]:hover {
  background-color: #ac0000;
}

/* Media Queries */
@media (max-width: 576px) {
  form {
    flex-direction: column;
  }
  .formWrapper {
    display: flex;
    flex-direction: column;
    width: 90vw;
    padding: 0 15px;
  }
  .searchBox {
    width: 100%;
    margin-bottom: 10px;
  }
  .buttonGroup {
    width: 100%;
    justify-content: center;
  }
  input[type="text"] {
    font-size: 14px;
  }
  button[type="submit"],
  button[type="button"] {
    font-size: 14px;
  }
}
</style>
