"use server"
import { cookies } from "next/headers"
import { userRegisterT } from "../zodType/userSchema"

export const handleLoginLib = async(data:userRegisterT)=>{
  try {
    const res = await fetch("http://localhost:4000/user/login",{
        method:"POST",
        body: JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      }
    )
    const ans = await res.json()
    if(ans.error) return "Invalid username or password"
    else cookies().set({name:"jwt",value:ans.data})
  }
  catch(e) {
    console.log("client error",e)
  }

}