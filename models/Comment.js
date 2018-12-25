const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  // name of user inputing comment - free text field
  // TODO make name a lookup field tied to authentication
  name: {
    type: String,
    required: true,
    default: "anonymous"
  },
  // free text field of the actual comment
  comment: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

// export the model of Comment
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;