const person=require('../models/model') 
const message=require('../models/msj')
const mongosse = require('mongoose') 
const {ObjectID}=require('bson')



//get_all_person
const getPerson = async (req,res)=>{
    try{
        const get = await person.find({})
        res.json(get)
    }catch(err){
        res.status(404).json({err:'fr'})
    }
}

//get one person
const getOnePerson = async (req,res)=>{
    const {id}=req.params
    if(!mongosse.isValidObjectId(id)){
        res.status(404).json({err:"err id"})
    }
    const Porson = await person.findById(id)
    if(!Porson){
       return res.status(404).json({err:"err : id"})
    }
    res.json(Porson)
}

//create porson
const createPerson = async (req,res)=>{
    const {username,email,password} = req.body

    try{
        const Porson = await person.create({username,email,password})
        res.json(Porson)
    }catch(err){
        res.status(404).json({err:'err'})
    }
}
//creat msj 
const createSms = async (req,res)=>{
    const {id}=req.params
     if(!mongosse.isValidObjectId(id)){
        res.status(404).json({err:"err id"})
    }
     try{
        const Message = await person.updateOne({_id:ObjectID(id)},{$push:{msj:{ ...req.body}}})
        res.json(Message)
    }catch(err){
        res.status(404).json({err:'err'})
    }
}

module.exports = {
    createPerson,
    getPerson,
    createSms,
    getOnePerson,
   
}