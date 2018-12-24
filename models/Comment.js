const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  story: {
    type: Schema.Types.ObjectId,
    ref: 'Article'
  }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;