const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load Article Model
const Article = require('../../models/Article');

// @route   GET api/articles
// @desc  your components will use this to query MongoDB for all saved articles
// @access  Public
router.get('/articles', (req, res) => {
    Article.findAll({ article: req.body.id })
    .populate('article', [])
    .then()
    .catch()
});

// @route   POST api/articles
// @desc   your components will use this to save an article to the database
// @access  Public
router.Post('/articles', (req, res) => {
    Article.save({ article: req.body.id })
    .populate('article', [])
    .then()
    .catch()
});

// @route   Delete api/articles
// @desc    your components will use this to delete a saved article in the database
// @access  Public
router.Delete('/articles', (req, res) => {
    Article.destroy({ article: req.body.id })
    .populate('article', [])
    .then()
    .catch()
});