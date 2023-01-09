const express =require('express');
const sequelize=require('./database/databaseconfig')
const Sequelize=require('sequelize')
const app=express();
const port=process.env.PORT || 3000;
const getall=require('./studentController/studentController')
app.get('/', (req:Request,res:Response)=>{
     getall()
})
app.listen(port,()=>{
    console.log('server is running')
})
