<template>
  <div class="all-container">
    <p>Search on:</p>
    <div class="section-wrapper">
      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          id="title"
          value="title"
          v-model="Field"
        />
        <label for="title">Title</label>
      </div>
      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          id="author"
          value="author"
          v-model="Field"
        />
        <label for="author">Author Surname</label>
      </div>
      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          id="journal"
          value="journal"
          v-model="Field"
        />
        <label for="journal">Journal</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchFilter',
  computed: {
    Field: {
      get() {
        return this.$store.getters.Field
      },
      set(value) {
        this.$store.commit('updateField', value)
      },
    },
  },
}
</script>
<style scoped>
.radio-container {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3px;
}
.all-container,
.section-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.5rem;
}
label {
  vertical-align: none;
  flex: 1;
}
span,
label {
  font-size: 14px;
}
.radio {
  width: 1rem;
  height: 1rem;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 600px) {
  .all-container {
    display: flex;
    align-items: center;
    justify-content: none;
    column-gap: 1.5rem;
  }
  .section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 0.5rem;
  }
  .radio-container {
    display: flex;
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
  }
  label {
    flex: none;
  }
}
</style>
