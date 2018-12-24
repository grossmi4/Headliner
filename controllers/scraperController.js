// const db = require("../models"); //get models for db
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
        const description = $(element).find("p").text();
        console.log(description);
      })
    })
  });

}