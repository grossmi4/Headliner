const mongoose = require("mongoose");
const Article = require("./Article");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "anonymous"
  },
  comment: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  },
  story: {
    type: Schema.Types.ObjectId,
    ref: 'Article'
  }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;