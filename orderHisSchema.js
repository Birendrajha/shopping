const mongoose = require('mongoose')
const validator =require('validator')
const orderschema =new mongoose.Schema({
    
    

    useremail: {
        type: String,
        required: true,
        unique:true 


    },
    name:{
        type:String,
        required:true,
        minlength:3
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'duct',
        required:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cat',
        required:true
    },

    
    createdAt:{
        type:Date,
        default:Date.now()
   },
   productname:{
       type:String,
       ref:'duct',
       required:true
   },
   categoryname:{
       type:String,
       ref:'cat',
       required:true
   }
    

})
orderschema.virtual('orderhistory',{
    ref:'productSchema',
    localField:'_id',
    foreignField:'categoryId'
    
})
orderschema.set('toObject',{virtuals:true})
orderschema.set('toJSON',{virtuals:true}) 

const  ordercollection =mongoose.model('ordercollection',orderschema)
module.exports = ordercollection