const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact"
);

const articleSeed = [
  {
    title: "Zoologists Admit You Really Got To Hand It To Bats For Learning To Fly",
    url: "https://www.theonion.com/zoologists-admit-you-really-got-to-hand-it-to-bats-for-1829268639",
    date: new Date(Date.now())
  },

];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});