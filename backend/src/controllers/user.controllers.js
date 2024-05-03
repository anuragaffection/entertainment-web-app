const bcrypt = require('bcrypt')
const { User } = require('../models/user.models.js')
const { generateCookie } = require('../utils/user.utils.js')


// user register 
const userRegister = async (req, res) => {

    const { name, email, password } = req.body;  // destructuring 
    let user = await User.findOne({ email });  // from mongoDB

    if (user) return res.status(404).json({
        success: false,
        message: "user already exist",
    })

    const hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({
        name,
        email,
        password: hashPassword,  // updating password  with hashpassword 
    });

    generateCookie(user, res, 201, "User Register Successfully");
};


// user login 
const userLogin = async (req, res) => {

    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({
        success: false,
        message: "user or email do not exist",
    });

    // user.password = comming from db 
    // password      = comming from frontend website 
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            success: false,
            message: "Invalid Credential or Wrong password"
        })
    }

    generateCookie(user, res, 201, `Welcome ${user.name}`);
};



// user logout 
const userLogout = (req, res) => {
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "logout successfully"
    })
}


// user profile details 
const userProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    })
}


// finding user by id 
const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) return res.status(404).json({
        success: false,
        message: "Invalid id, user does not exist "
    })

    res.json({
        success: true,
        message: "This  is the data of user ",
        data: user
    })
}


// exporting 
module.exports = {
    userRegister, userLogin, userLogout, userProfile, getUserById
}