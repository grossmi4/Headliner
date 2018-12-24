const mongoose = require("mongoose");

const Schema = mongoose.schema;

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
})