const mongoose = require('mongoose')
const schema = mongoose.schema({
    shortID : { type:String ,
             required:true ,
              unique:true
     }  ,
     ID : { type:String ,
        required:true ,
}  ,
visit :[
    {timestamp:true}  
]} , {timestamps:true}) 

const URL = mongoose.model( 'url' , schema)

module.exports = {URL}
