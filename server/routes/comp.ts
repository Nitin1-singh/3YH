import { Router } from "express";
import { createCompetiton, getAllCompetition } from "../lib/db";
export const compRouter = Router() 

compRouter.get("/",async(req,res)=>{
  try {
    const data = await getAllCompetition()
    res.json({sucess:true,data:data})
  } catch (e) {
    res.json({sucess:true,error:e})
  }
})

compRouter.post("/",(req,res)=>{
  try {
    const data = req.body
    createCompetiton({description:data.description,photo:data.image,end_date:data.end,test_data:data.test,train_data:data.train})
    res.json({sucess:true})
  }catch(e) {
    console.log(e)
    res.status(500).json({sucess:true,error:e})
  }
})