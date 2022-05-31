// import Section
const express = require("express");
const app =express()
const mongoose = require("mongoose")
app.use(express.json());
require ("dotenv").config()

const userRoute = require("./Routes/user")
const authRoute = require("./Routes/auth")

// Routes
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)

// Mongo Database Connection
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected")).catch((err)=>console.log("Error",err))

// Port Configuration
const Port = process.env.PORT;

// Default Route For Application
app.get("/",(req,res)=>{
            res.json("hello")
})


// localhost Post Listening 
app.listen(Port || 4545 ,()=>{
    console.log(`server is Ruunning on http://localhost:${Port}`)
})