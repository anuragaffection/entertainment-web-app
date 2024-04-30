const express = require('express')
const { isAuthenticated } = require('../middleware/auth.js')
const { userRegister, userLogin, userLogout, userProfile, getUserById } = require('../controllers/user.controllers.js')

const userRouter = express.Router();

userRouter.post('/user/register', userRegister);
userRouter.post('/user/login', userLogin);
userRouter.get('/user/logout', userLogout);
userRouter.get('/user/profile', isAuthenticated, userProfile);
userRouter.get('/user/:id', getUserById)

module.exports = { userRouter }