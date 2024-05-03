const mongoose = require('mongoose')


// database schema of user 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

// creating model, why ?
// behind the scene it works as class constructors 
// const user    = our variable 
// .model("User", ) = name in mongoDb 
// .model("User", userSchema) = storing userSchema in user in mongodb 
const User = mongoose.model("User", userSchema);

module.exports = { User }