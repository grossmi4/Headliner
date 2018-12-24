const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateRetrieved: {
    type: Date,
    required: true
  },
  imgLink: {
    type: String
  }
  //TODO add reference to comment array
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;