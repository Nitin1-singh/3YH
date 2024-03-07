import { Router } from "express";
import { createUser, loginUser } from "../lib/db";
import { createToken, verifyToken } from "../lib/token";

export const userRouter = Router()

userRouter.post("/register",(req,res)=>{
  setTimeout(async()=>{
    try {
      const data = req.body
      const id = (await createUser(data))
      const token = createToken({id:id.result,username:id.username,photo:id.photo})
      res.json({data:token})
    }catch(e) {
      res.json({error:e})
    }
  },3000)
})

userRouter.post("/login",(req,res)=>{
  setTimeout(async()=>{
  try {
    const data = req.body
    const valid = await loginUser(data)
    if(valid) {
      const token = createToken({id:valid.result,username:valid.username,photo:valid.photo})
      res.json({data:token})
    }
    else {
      throw new Error("Invalid username or password")
    }
  }catch (e) {
    res.json({error:"Invalid username or password"})
  }
},3000)})

userRouter.post("/verify",async(req,res)=>{
  const { token } =  req.body 
  try {
    const data = verifyToken(token)
    return res.status(200).json({sucess:true})
  }catch (e) {
    return  res.status(400).json({sucess:false,error:e})
  }
})


userRouter.post("/getUser",(req,res)=>{
  const { token } =  req.body 
  try {
    const data = verifyToken(token)
    return res.status(200).json({sucess:true,data:data})
  }catch (e) {
    return  res.status(400).json({sucess:false,error:e})
  }
})
