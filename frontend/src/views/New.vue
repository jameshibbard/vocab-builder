<template>
  <div>
    <h1>New Word</h1>
    <word-form @createOrUpdate="createOrUpdate"></word-form>
  </div>
</template>

<script>
import WordForm from "../components/WordForm.vue";
import { api, flashMessages } from "../helpers/helpers";

export default {
  name: "new-word",
  components: {
    "word-form": WordForm
  },
  methods: {
    createOrUpdate: async function(word) {
      const res = await api.createWord(word);
      flashMessages.push({ text: "Word created sucessfully!" });
      this.$router.push(`/words/${res._id}`);
    }
  }
};
</script>
