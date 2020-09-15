import express from 'express'
import data from './data'
const mongoose=require("mongoose")
const app=express()
import userroute from './routes/userroute'
import productroute from './routes/productroute'
const bodyParser = require('body-parser')

const {mongourl}=require('./key')
mongoose.connect(mongourl,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})

mongoose.connection.on('connected',()=>{console.log("connected")})
mongoose.connection.on('error',(error)=>{console.log("error",error)})

app.use(bodyParser.json())


app.use('/api/users',userroute)
app.use('/api/products',productroute)

// app.get('/api/products',(req,res)=>{
//   res.send(data.products)
// })
// app.get('/api/products/:id',(req,res)=>{
//   const productId=req.params.id
//   const product=data.products.find( x=> x._id ===productId)
//   if(product){
//     res.send(product)
//   }
//   else{
//     res.status(404).send({msg:"product not find"})
//   }
// })


app.listen(5000,()=>{console.log("server started at http://localhost:5000")})

// const express = require('express')
// const app = express()
// const port = 4000
// // const mongoose=require("mongoose")
// import mongoose from 'mongoose'
// const {mongourl}=require('./key')

// mongoose.connect(mongourl,{useNewUrlParser:true,useUnifiedTopology:true})

// mongoose.connection.on('connected',()=>{console.log("connected")})
// mongoose.connection.on('error',(error)=>{console.log("error",error)})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })