<script>
export default {
  props: {
    characters: Array, // Array of characters
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
        <img
          :src="character.image"
          :alt="character.name"
          class="characterImage"
        />
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
/* Add your CSS styling here */
.cardsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contentContainer {
  display: flex;
}
.characterCard {
  display: flex;
  align-items: center;
  border: 1px solid rgb(206, 206, 206);
  background-color: rgb(38, 38, 38);
  width: 50%;
  margin: 4px;
  border-radius: 6px;
}
.characterImage {
  width: 160px;
  height: 160px;
  padding: 12px 12px 12px 12px;
}
.characterInfo {
  display: flex;
  flex-direction: column;
  padding: 12px;
  font-family: sans-serif;
  color: rgb(194, 194, 194);
}
</style>
