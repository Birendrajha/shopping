const mongoose = require('mongoose')
const categoryschema =new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
   },
        isActive:{
        type: Boolean,
        required:true
    },
    createdAt:{
         type:Date,
         default:Date.now
    }
}) 
categoryschema.virtual('product',{
   ref:'duct', 
   localField:'_id',
   foreignField:'categoryId',
   justOne:false
})
categoryschema.virtual('expensive',{
    ref:'duct',
    localField:'_id',
    foreignField:'categoryId',
    options:{sort:{price:-1},limit:3}
})

categoryschema.set('toObject',{virtuals:true})
categoryschema.set('toJSON',{virtuals:true})
const  cat =mongoose.model('cat',categoryschema)
module.exports = cat