const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport/index');
const dbConnection = require('./models/dbConnection')
const path = require("path");
// const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;
const routes = require("./routes");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)
app.use(passport.initialize())
app.use(passport.session()) 

// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/TypingTutor");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
