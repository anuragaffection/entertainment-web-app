const Jwt = require('jsonwebtoken')
const { User } = require('../models/user.models.js')


const isAuthenticated = async (req, res, next) => {

    const { token } = req.cookies; // cookies  = in built things 

    if (!token) return res.status(404).json({
        success: false,
        message: 'Token Not Found, Please Login'
    })

    const secretToken = process.env.TOKEN;

    const decode = Jwt.verify(token, secretToken);
    req.user = await User.findById(decode._id);

    next();
}


module.exports = { isAuthenticated }