const db = require("..models"); //get models for db

module.exports = function(app) {
  //set route to land on comment page for article
  app.get("/comment/:id", function(req, res) {
    //set articleId from request header
    const articleId = req.params.id;
    //retrieve article from db using mongoose
    db.Article.findOne( { _id: articleId } )
      .then(function(dbArticle) {
        res.render("comment", { article: dbArticle })
      })

  })

}