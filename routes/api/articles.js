const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load Article Model
const Article = require('../../models/Article');


// @route   GET 
// @desc  your components will use this to get new articles
// @access  Public
router.get("/", (req, res) =>  {
    
    axios.get("https://www.wired.com/most-popular/").then((response) => {
      // load cheerio and save it to $ 
      const $ = cheerio.load(response.data);

      let articles = [];

      // li with class arhive-item-component and build object to render:
      $("li.archive-item-component").each(function(i, element) {
        // Add the text, href, summary, author & read time of every article, and save them as properties of the result object
        articles.push({
          headline: $(element)
            .children("div")
            .children("a")
            .children("h2")
            .text(),
          link: "https://www.wired.com" + $(element)
            .children("a")
            .attr("href"),
          summary: $(element)
            .children("div")
            .children("a")
            .children("p")
            .text(),
          imageURL: $(element)
            .children("a")
            .children("div")
            .children("div")
            .children("div")
            .children("div")
            .children("img")
            .attr("src"),
          articleDate: $(element)
            .children("div")
            .children("div")
            .children("time")
            .text()
        })
      });
      // Successfully scraped, render the articles
      res.render("index", {articles:articles})
    });
  });



// @route   GET api/articles
// @desc  your components will use this to query MongoDB for all saved articles
// @access  Public
router.get('/articles', (req, res) =>{
db.Article.find({}).sort({articleDate:-1}) //
.then(function(dbArticle) {

  // Send them back to the client
  res.render("index", {articles:dbArticle});
})
.catch(function(err) {
  // If an error occurred, send it to the client
  res.json(err);
});
});

// @route   POST api/articles
// @desc   your components will use this to save an article to the database
// @access  Public
router.post('/articles', (req, res) => {
    db.Article.find({headline:req.body.headline})
    .then(function(dbArticle) {
      // If article is not already saved, then add it to the db
      if (dbArticle.length ===0){
        db.Article.create(req.body)
        .then(function(dbArticle) {
    
          res.send("status 200")
        })
        .catch(function(err) {
          // If an error occurred, send it to the client
          return res.json(err);
        })
      }
      // Article already saved in db
      else {
        console.log("Article already in db")
      }
    })
  })


// @route   Delete api/articles
// @desc    your components will use this to delete a saved article in the database
// @access  Public
router.delete('/articles', (req, res) => {
    // Delete article from path req.params.id
    db.Article.deleteOne({"_id":req.params.id})   
    .then(function(response){
      console.log("article deleted")
      // Delete all associated notes to the article req.params.id
      db.Note.deleteMany({"article":req.params.id})   
      .then (function(response){
        console.log("notes deleted")
        res.end()
      })
    })
  })

module.exports = router;