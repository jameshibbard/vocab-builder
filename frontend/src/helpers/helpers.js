import axios from "axios";

export const flashMessages = [];
export const flashOptions = {
  timeout: 3000,
  pauseOnInteract: true
};

const baseURL = "http://localhost:3000/words/";

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    flashMessages.push({
      text: `${error.response.status}: ${error.response.statusText}`,
      type: "error"
    });
  });

export const api = {
  getWord: handleError(async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  getWords: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deleteWord: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createWord: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updateWord: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  })
};
