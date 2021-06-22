const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.post("/login", async (req,res,next) => {
    try{
        //take user email and pass and attempt to auth them 
    } catch (err){
        next(err)
    }
})

router.post("/register", async (req,res,next) => {
    try{
        //take user email password, appoint status and number of appoints
        //and create a new user in our database
    } catch(err){
        next(err)
    }
})

module.exports = router