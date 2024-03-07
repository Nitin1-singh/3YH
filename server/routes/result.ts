import { Router } from "express";
import { getResultById, getUserById, setResultById } from "../lib/db";

export const resultRouter = Router() 

resultRouter.post("/",async(req,res)=>{
  try {
    const d = req.body
    setResultById(req.body.comp,req.body.user,req.body.score)
    res.json({sucess:true, data:d})
  }
  catch (e) {
    console.log(e)
    res.json({sucess:false, error:e })
  }
})

resultRouter.post("/getResult",async(req,res)=>{
  try {
    const data = []
    const ans = await getResultById(req.body.id)
    for (let index = 0; index < ans.length; index++) {
      const element = ans[index];
      const user = await getUserById(element.id)
      let obj = {name:user?.username,profile_img:user?.profile_img,score:element.score}
      data.push(obj)
    }

    return res.json({sucess:true,data:data})
  }catch (e) {
    console.log(e)
    return res.json({sucess:false,error:e})
  }
})