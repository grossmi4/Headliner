const mongoose = require("mongoose");
const Comment = require("./Comment");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  // headline is uniquely defined. this prevents multiple additions to mongodb of the same article
  headline: {
    type: String,
    required: true,
    unique: true
  },
  // secondary information displayed below headline to give better glimpse
  description: {
    type: String,
    required: true
  },
  // for informational purposes only
  dateRetrieved: {
    type: Date,
    required: true,
    default: Date.now()
  },
  // link to article on Reuters.com
  articleLink: {
    type: String,
    required: true
  },
  // link to image associated with artcile on reuters
  imgLink: {
    type: String
  },
  // array with relationship to Comment.js model file
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: Comment
    }
  ]
});

// export model
const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;