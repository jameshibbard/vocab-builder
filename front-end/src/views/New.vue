<template>
  <div>
    <h1>New Word</h1>
    <word-form @createOrUpdate="createOrUpdate"></word-form>
  </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'new-word',
  components: {
    'word-form': WordForm
  },
  methods: {
    createOrUpdate: async function(word) {
      await api.createWord(word);
      this.flash('Word created', 'success');
      this.$router.push(`/words/new`);
      word.german = '';
      word.english = '';
    }
  }
};
</script>
