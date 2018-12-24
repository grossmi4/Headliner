const db = require("../models"); //get models for db
const axios = require("axios"); //used to make get requests for scraping
const cheerio = require("cheerio"); //used to parse html from scraping requests

module.exports = function(app) {
  //get top 5 new stories
  app.get("/", function(req, res) {
    //use axios to retrieve html from reuters.com
    axios.get("http://www.reuters.com/").then(function(response) {
      //load html into cheerio
      const $ = cheerio.load(response.data);

      //grabs the first article tags with class 'story'
      $("article.story").each(function(i, element) {
        const headline = $(element).find("h3").text();
        const description = $(element).find("p").text();
        const articleLink = $(element).find("a").attr('href');
        const imgLink = $(element).find("img").attr('src');
        const article = {
          headline: headline.replace(/[\n\t]/g,""), // uses regex to trim \t and \n characters
          description: description,
          articleLink: "https://www.reuters.com" + articleLink,
          imgLink: imgLink
        };

        // Create new article in the database
        db.Article.create(article)
          .then(function(dbArticle) {

          });

        //TODO Need to prevent duplicates from writing to DB


      });
      db.Article.find({}).limit(10)
        .then(function(dbArticle) {
          console.log(dbArticle);
          res.render("index", { articles: dbArticle } )
        })
    })
  });

};