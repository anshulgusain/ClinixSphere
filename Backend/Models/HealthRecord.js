const mongoose=require('mongoose')


const HealthSchema=mongoose.Schema({
    name:{required:true,type:String},
    date:{required:true,type:String},
    bloodPressure:{required:true,type:String},
    heartRate:{required:true,type:String}

})

const HealthRecord=mongoose.model("healthRecord",HealthSchema)


module.exports={
    HealthRecord
}