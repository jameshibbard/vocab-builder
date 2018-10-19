const vocab = require('../controllers/vocabController');

module.exports = app => {
  app
    .route('/words')
    .get(vocab.list_all_words)
    .post(vocab.create_a_word);

  app
    .route('/words/:wordId')
    .get(vocab.read_a_word)
    .put(vocab.update_a_word)
    .delete(vocab.delete_a_word);
};
