import { Router } from "express";
import { createUser, loginUser } from "../lib/db";
import { createToken } from "../lib/token";

export const userRouter = Router()

userRouter.get("/",(req,res)=>{
  res.json("get user")
})
userRouter.post("/register",async (req,res)=>{
  try {
    const data = req.body
    const id = (await createUser(data))?.result
    const token = createToken({id:id})
    res.json({data:token})
  }catch(e) {
    console.log("e = ",e)
    res.json({error:e})
  }
})

userRouter.post("/login",async(req,res)=>{
  try {
    const data = req.body
    const valid = (await loginUser(data))?.result
    if(valid) {
      const token = createToken({id:valid})
      res.json({data:token})
    }
    else {
      throw new Error("Invalid username or password")
    }
  }catch (e) {
    res.json({error:"Invalid username or password"})
  }
})