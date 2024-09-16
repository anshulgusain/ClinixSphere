const express=require('express')
const { connection } = require('./Connection/connect')


const app=express()

app.get("/",(req,res)=>{
    res.send("Base Url")
})

app.listen(8080,async()=>{
    try{
        await connection
        console.log("Listening to 8080")
    }catch(err){
        console.log(err)
        console.log("Error in Connection to Mongodb")
    }
})