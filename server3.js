const express = require('express')
const app = express()
const mongoose=require("mongoose")
require('./modeel/connection/herry')
const duct =require('./modeel/productSchema')
const cat=require('./modeel/cateSchema')
const ordercollection=require('./modeel/orderHisSchema')
app.use(express.json())
// const router=express.Router()

    app.post('/api/product', async (req, res) => {
    const user = new duct(req.body)
    console.log(user)
       try {
   
           await user.save()
           res.send(user)
           res.status(200).send()
           
       } catch (e) {
           res.status(400).send(e)
       }
   })
app.get('/api/readproduct',async(req,res)=>
{
try{
    const data=await duct.find({})
    res.send(data)
    res.status(200).send("insert is ok")
}catch{
    res.status(404).send("not found record")
}
})



 app.post('/api/category', async (req, res) => {
    const help = new cat(req.body)
    console.log(help)
       try {
   
           await help.save()
           res.send(help)
           res.status(200).send()
           
       } catch (e) {
           res.status(400).send(e)
       }
   })

   app.get('/api/readcategory',async(req,res)=>
   {
   try{
       const value=await cat.find({})
       res.send(value)
       res.status(200).send("insert is ok")
   }catch{
       res.status(404).send("not found record")
   }
   })




   app.get('/api/categorywithproduct/read',async(req,res)=>{
       try{
           const data=await cat.find({})
           .populate('product')
           .exec(function(err,result){
               if(err){
              res.send('error')
               }else{
                   res.send(result)
               }
               
           })
       }catch(e){
           res.send(e)
       }
   })


   app.get("/api/expensiveproducts/read",async(req,res)=>{
       try{
           const dataa =await cat.find({})
           .populate('expensive',{
               path:"cateSchema"
           })
           .exec(function(err,result){
               if(err){
                   res.send(err)
               }else{
                   res.send(result)
               }
           })
       }catch(e){
           res.send(e)
       }
   })


   
   app.post('/api/order/insert',async(req,res)=>{
       const post=await req.body
       try{
           const data=await ordercollection.insertMany(post)
           res.send(data)
           
       }catch(e){
           res.send(e)
       }
   })

   app.get('/orderhistorysevendays/api',async(req,res)=>{
       const today=new Date()
       const result=await ordercollection.find({
           createdAt:{$gte:today.getTime()- 1000 * 60 * 60 * 24 * 3}
       })
        .populate({
               path:"categorySchema",
               populate:{
                   path:'productSchema',
               options:{select:{name:-1,id:-1}}
           }
           
            })
    
        res.send(result)
    })
       
       
    app.get('/getorder/api',async(req,res)=>{
        
           const data=await ordercollection.find({})
            .populate({
               path:"productSchema" ,
               populate:{
                   path:"cateSchema",
                   options:{select:{name:-1}}
               }
            })
            res.send(data)

        

    });    
app.listen(5008,()=>{
       console.log(`server is running`)
   })














   