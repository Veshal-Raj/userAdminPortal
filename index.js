const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/ECOM")


//user routes
const user_routers = require("./routes/userRoute")

app.use('/api',user_routers)


app.listen(3000,function(){
    console.log("Server is ready...")
})