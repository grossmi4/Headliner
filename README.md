# Headliner
The Headliner is an example application that scrapes the latest headlines from www.Reuters.com and enables users to leave stored comments.
[Heroku Deployed Example](https://the-headliner.herokuapp.com/)

### Prerequisites
To run this application you will need to have node installed. To check if installed, run the below command.

```node -v```

### Installation

Clone this repo and run the follow...

```npm install```

###Running the Application

You can start a local server using the ```node server.js``` command when in the root directory.
The site will scrape Reuters.com upon visit to the root URL (defaulted to port 3000).
Check your local runtime with the following link. [localhost:3000]().

###Build Info
Dependencies:
* Axios - Serverside http requests
* Cheerio - Serverside jQuery used for html parsing
* Express - JS Server
* Express-Handlebars - Server templating engine
* Mongoose - DB ODM for MongoDb

###Authors
[Michael Gross](https://github.com/grossmi4)