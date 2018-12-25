const db = require("../models"); //get models for db

module.exports = function(app) {

  //set route to land on comment page for article based on article-id parameter in header
  app.get("/comment/:id", function(req, res) {

    //set articleId from request header
    const articleId = req.params.id;

    //retrieve article from db using mongoose
    console.log("Retrieving article for comment page...");
    db.Article.findOne( { _id: articleId } )
      // populate commentIds in comments array with the associated comment record in Comments collection
      .populate("comments")
      // render the page with comments
      .then(function(dbArticle) {
        console.log(dbArticle);
        res.render("comment", dbArticle)
      })

  });

  //set route to receive a new comment
  app.post("/comment/:id", function(req, res) {

    //set articleId from post header
    const articleId = req.params.id;
    //create comment in db
    db.Comment.create(req.body)
      .then(function(dbComment) {
        // after creating the comment, push CommentId to comments array in Articles collection
        return db.Article.findOneAndUpdate({ _id: articleId }, {$push: {comments: dbComment._id}}, {new: true});
      })
      .then(function() {
        // reload page with new comment
        res.redirect(`/comment/${articleId}`)
      })
      .catch(function(err) {
        res.json(err);
      });

  });
};