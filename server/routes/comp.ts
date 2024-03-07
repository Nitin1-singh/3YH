import { Router } from "express";
import { createCompetiton, getAllCompetition, getCompetitionById } from "../lib/db";
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
    createCompetiton({title:data.title,description:data.description,photo:data.image,end_date:data.end,train_data:data.train})
    res.json({sucess:true})
  }catch(e) {
    res.status(500).json({sucess:true,error:e})
  }
})

compRouter.post("/getComp",async(req,res)=>{
  try {
    const id = req.body.id
    const data = await getCompetitionById(id)
    res.json({sucess:true,data:data})
  }catch(e) {
    res.status(500).json({sucess:true,error:e})
  }
})

