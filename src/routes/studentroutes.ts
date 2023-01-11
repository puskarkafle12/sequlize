import { updateStudentByName,getall,getStudentById,deletestudent, insertstudent } from "../studentController/studentController"
import { Request,Response } from "express";

var Router=require('express').Router()

Router.get('/getall', async(req:Request,res:Response)=>{
    const result=await getall()
    res.json(result)
})
Router.get('/getstudentbyid/:id', async(req:Request,res:Response)=>{
   const result = await getStudentById(parseInt(req.params.id));
   res.json(result)
})
Router.get('/deletestudent/:id', async(req:Request,res:Response)=>{
    const result = await deletestudent(parseInt(req.params.id));
    res.json(result)
})
Router.post('/insertstudent/', async(req:Request,res:Response)=>{
   const {name ,email,password}=req.body
   const result = await insertstudent(name,email,password);
   res.json({
       message:result
   })
})
Router.post('/updatestudent/', async(req:Request,res:Response)=>{
   const {id ,update}=req.body
   console.log(id)
   const result = await updateStudentByName(id,update);
   res.json({
       message:'sucessfully added'+result
   })
})
module.exports=Router