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
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: Comment
    }
  ]
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;