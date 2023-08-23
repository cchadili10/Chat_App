const mongoose = require('mongoose')
const Schema = mongoose.Schema


const sms = new Schema({
    from_id:{
        type:String,
        required:true
    },
    to_id:{
        type:String,
        required:true
    },
    msj:{
        type:String,
        required:true
    }
    
},{collection:'messages'})

module.exports = mongoose.model('message',sms)