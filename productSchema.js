const mongoose = require('mongoose')
const validator =require('validator')
const productschema =new mongoose.Schema({
    
    

    name: {
        type: String,
        required: true,
        minlength:3,
        unique:true 


    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cat',
        required:true
    },
    
    price:{
         type:Number,
         required:true,
         validate(value){
             if(value<=0){
                 return resizeBy.send("invalid price")
             }
         }
    },
    isActive:{
         type: Boolean,
         required: true,
    } ,
    createdAt:{
        type:Date,
        default:Date.now
   }
    

}) 
const  duct =mongoose.model('duct',productschema)
module.exports = duct







//1 boot log
//2 abcd
//3safe mode 
//4port: both d &e option f
//5 :option 3 :nat
//6:wifi 3rd option wpa2
//7:bit log encryption
//8:all of the above
//9:shut doewn may be option 4
//10:c