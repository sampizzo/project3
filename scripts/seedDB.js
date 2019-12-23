const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/codinglanguages"
);

const userSeed =[
  {
    username: "test1",
    password: "1234",
    email: "email@email.com",
    userCreated: new Date(Date.now()),
    language: "HTML"
  }
] 
  
db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
