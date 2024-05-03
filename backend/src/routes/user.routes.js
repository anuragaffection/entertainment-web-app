const express = require('express')
const { isAuthenticated } = require('../middleware/auth.js')
const { userRegister, userLogin, userLogout, userProfile, getUserById } = require('../controllers/user.controllers.js')

// router instances 
const userRouter = express.Router();

// user routes 
userRouter.post('/user/register', userRegister);
userRouter.post('/user/login', userLogin);
userRouter.get('/user/logout', userLogout);
userRouter.get('/user/profile', isAuthenticated, userProfile);
userRouter.get('/user/:id', isAuthenticated, getUserById)

// exporting 
module.exports = { userRouter }