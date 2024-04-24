// importing installed packages 
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')


// importing routes 
// const bookmarkRouter = require('./routes/bookmark.routes.js')
const { mediaRouter } = require('./routes/media.routes.js')
// const userRouter = require('./routes/user.routes.js')

// app instances 
const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// routes 
// app.use("/api", bookmarkRouter); 
app.use("/api", mediaRouter);
// app.use("/api", userRouter); 





app.get('/home', (req, res) => {
    res.json({
        message: "Welcome to home route "
    })
})

// exporting 
module.exports = { app }

