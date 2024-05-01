const Jwt = require('jsonwebtoken')

const generateCookie = (user, res, statusCode = 200, message) => {

    const token = Jwt.sign({ _id: user._id }, process.env.TOKEN);

    res.status(201).cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true
    }).json({
        success: true,
        message: message,
        data: user
    })
}

module.exports = { generateCookie }