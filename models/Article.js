const mongoose = require("mongoose");
const Comment = require("./Comment");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  dateRetrieved: {
    type: Date,
    required: true,
    default: Date.now()
  },
  articleLink: {
    type: String,
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