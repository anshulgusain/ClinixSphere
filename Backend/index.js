const express=require('express')
const { connection } = require('./Connection/connect')
const { HealthRecord } = require('./Models/HealthRecord')
var cors = require('cors')

const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Base Url")
})

app.get("/health-records",async(req,res)=>{
   try{
    const data=await HealthRecord.find({})
    res.send(data)
   }catch(err){
    console.log(err)
    res.send("Error in fetching record")
   }
})

app.get("/health-records/:id",async(req,res)=>{
    const {id}=req.params
    try{
     const data=await HealthRecord.find({_id:id})
     res.send(data)
    }catch(err){
     console.log(err)
     res.send("Error in fetching record")
    }
 })

app.post("/health-records",async(req,res)=>{
    const {name,date,bloodPressure,heartRate}=req.body
    try{
       await HealthRecord.create({name,date,bloodPressure,heartRate})
       res.send("Records Successfully added")
    }catch(err){
        console.log(err)
        res.send("Error in adding Records")
    }

})

app.put("/health-records/:id",async(req,res)=>{
    const {name,date,bloodPressure,heartRate}=req.body
    const {id}=req.params

    try{
      await HealthRecord.findByIdAndUpdate(id,{name,date,bloodPressure,heartRate})
      res.send("Edited Successfully")
    }catch(err){
        console.log(err)
        res.send("Error in editing")
    }
})

app.delete("/health-records/:id",async(req,res)=>{

    const {id}=req.params

    try{
      await HealthRecord.findByIdAndDelete(id)
      res.send("Deleted Successfully")
    }catch(err){
        console.log(err)
        res.send("Error in Deletion")
    }
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