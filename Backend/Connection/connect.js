const mongoose=require('mongoose')
require('dotenv').config()

const connection=mongoose.connect(`mongodb+srv://anshulgusain99:${process.env.PASSWORD}@cluster0.vwiwavz.mongodb.net/clinixsphere`)

module.exports={
    connection
}