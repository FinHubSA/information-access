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
.all-container,
.radio-container,
.section-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.radio-container {
  column-gap: 3px;
}
.all-container,
.section-wrapper {
  column-gap: 1.5rem;
}
label{
  vertical-align: baseline;
  flex: 1;
}
p, label {
  font-size: 14px;
}
.radio {
  width: 1rem;
  height: 1rem;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 900px) {
  .section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
  }
  .radio-container {
    display: flex;
    justify-content: left;
    align-items: left;
  }
  label {
    vertical-align: baseline;
    flex: 1;
  }
}
</style>
