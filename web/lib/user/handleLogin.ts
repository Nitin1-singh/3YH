"use server"
import { cookies } from "next/headers"
import { userRegisterT } from "../zodType/userSchema"

export const handleLoginLib = async(data:userRegisterT)=>{
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_NODE_API+"/user/login",{
        method:"POST",
        body: JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      }
    )
    const ans = await res.json()
    if(ans.error) return {sucess:false,msg:"Invalid username or password"}
    else {
      cookies().set("jwt",ans.data)
      return {sucess:true}
    }

  }
  catch(e) {
    console.log("client error",e)
  }

}