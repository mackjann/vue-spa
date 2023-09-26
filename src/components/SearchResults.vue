<script>
export default {
  props: {
    characters: Array,
  },
};
</script>

<template>
  <div class="cardsContainer">
    <div
      v-for="character in characters"
      :key="character.id"
      class="characterCard"
    >
      <div class="contentContainer">
        <div class="imageWrapper">
          <img
            :src="character.image"
            :alt="character.name"
            class="characterImage"
          />
        </div>
        <div class="characterInfo">
          <h2>{{ character.name }}</h2>
          <p>Species: {{ character.species }}</p>
          <p>Status: {{ character.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.characterCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(206, 206, 206);
  background-color: rgb(38, 38, 38);
  margin: 4px;
  border-radius: 6px;
  width: 30%;
}

.contentContainer {
  padding: 1rem;
}

.imageWrapper {
  display: flex;
  justify-content: center;
}

.characterImage {
  max-width: 100%;
  height: auto;
  padding: 12px;
}

.characterInfo {
  display: flex;
  flex-direction: column;
  padding: 12px;
  font-family: sans-serif;
  color: rgb(194, 194, 194);
}

@media (max-width: 576px) {
  .characterCard {
    width: 95%;
  }
}
</style>
