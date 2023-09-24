<script>
export default {
  props: {
    characters: Array, // Array of characters
  },
};
</script>

<template>
  <div class="cards-container">
    <div
      v-for="character in characters"
      :key="character.id"
      class="character-card"
    >
      <div class="content-container">
        <img
          :src="character.image"
          :alt="character.name"
          class="character-image"
        />
        <div class="character-info">
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
.cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-container {
  display: flex;
}
.character-card {
  display: flex;
  align-items: center;
  border: 1px solid rgb(206, 206, 206);
  background-color: rgb(38, 38, 38);
  width: 50%;
  margin: 4px;
  border-radius: 6px;
}
.character-image {
  width: 160px;
  height: 160px;
  padding: 12px 12px 12px 12px;
}
.character-info {
  display: flex;
  flex-direction: column;
  padding: 12px;
  font-family: sans-serif;
  color: rgb(194, 194, 194);
}
</style>
