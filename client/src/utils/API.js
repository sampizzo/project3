import axios from "axios";

export default {
  getUser: function() {
    return axios.get("/getuser");
  },
  // Gets all books
  getScores: function() {
    return axios.get("/api/scores");
  },

  saveCoins: function(id) {
    return axios.put("/getuser/" + id)
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Saves a book to the database
  saveScores: function(scoreData) {
      console.log("Save scores")
    return axios.post("/api/scores", scoreData);
  }
};