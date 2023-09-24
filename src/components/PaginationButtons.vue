<script>
export default {
  props: {
    nextPage: String,
    prevPage: String,
  },
  methods: {
    goToNextPage() {
      if (this.nextPage) {
        this.$emit("nextPage", this.nextPage);
      }
    },
    goToPrevPage() {
      if (this.prevPage) {
        this.$emit("prevPage", this.prevPage);
      }
    },
  },
};
</script>
<template>
  <div class="buttonGroup">
    <button @click="goToPrevPage" :disabled="!prevPage">Previous Page</button>
    <button @click="goToNextPage" :disabled="!nextPage">Next Page</button>
  </div>
</template>
<style scoped>
.buttonGroup {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 20px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

button[disabled] {
  background-color: #cccccc;
  color: #666666;
  cursor: default;
}
</style>
