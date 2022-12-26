const express = require("express");
var app = express()
const peronalRegisterRouter = require('./routes/v1/personalRegisterRouter') // * Router. 
app.use(express.json()); // ? Middleware it parses incoming JSON requests and puts the parsed data in req.body.
app.use('/crud', peronalRegisterRouter) // ? curd domain middleware
app.listen(8000, () => {
    console.log("Server is Running")
})


// * By: @Mouayad Mouayad
// ? Contact:  Mouayad1998@hotmail.com ,  0733524957