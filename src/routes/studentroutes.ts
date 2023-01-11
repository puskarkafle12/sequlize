import { updateStudentById,getall,getStudentById,deletestudent, insertstudent } from "../studentController/studentController"
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
Router.post('/insertstudent', async(req:Request,res:Response)=>{
   const {name ,email,password}=req.body
   const result = await insertstudent(name,email,password);
   res.json({
       message:result
   })
})

Router.post('/updatestudent/', async(req:Request,res:Response)=>{
    let result;
   const {id ,update}=req.body
   console.log(id)
   result=updateStudentById(id, update)
   console.log('this  is the result:'+result)
   return result  // here is confusion why the result is printing only when return is used
.then(result => {
   res.json(result);
})
.catch(err => {
    result=err;
})
res.json(result)
})
module.exports=Router
