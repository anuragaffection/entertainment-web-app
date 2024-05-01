// importing 
const express = require('express')
const { isAuthenticated } = require('../middleware/auth.js')
const { checkBookmark, addBookmark, deleteBookmark, getBookmark, filterBookmark } = require('../controllers/bookmark.controllers.js')

// router instances 
const bookmarkRouter = express.Router();

//bookmark routes 
bookmarkRouter.get('/media/bookmark/check/:id', isAuthenticated, checkBookmark)
bookmarkRouter.post('/media/bookmark/add', isAuthenticated, addBookmark)
bookmarkRouter.delete('/media/bookmark/delete/:id', isAuthenticated, deleteBookmark)
bookmarkRouter.get('/media/bookmark/get', isAuthenticated, getBookmark)
bookmarkRouter.get('/media/bookmark/search/:searchQuery', isAuthenticated, filterBookmark)

// exporting 
module.exports = { bookmarkRouter }