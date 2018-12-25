// index file to allow mapping to entire models folder in one require statement. see server.js for example.

module.exports = {
  Article: require("./Article"),
  Comment: require("./Comment")
};
