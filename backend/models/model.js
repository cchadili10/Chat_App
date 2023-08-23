const mongoose = require('mongoose')
const Schema = mongoose.Schema

const person = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    msj:{
        type:Array,
        from_id:{
            type:String
        },
        to_id:{
            type:String
        },
        message:{
            type:String
        }
    }
   
},{collection: 'person'})

module.exports=mongoose.model('person',person)
