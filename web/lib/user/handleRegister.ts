"use server"
import { cookies } from "next/headers"
import { userRegisterT } from "../zodType/userSchema"

export const handleRegisterLib = async(data:userRegisterT) =>{ 
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_NODE_API+"/user/register",{
      method:"POST",
      body: JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const item = await res.json()
    if(item.error) return {error:"Username already in use"}
    else {
      cookies().set({
        name: "jwt",
        value: item.data,
      })
      return {data:cookies().get("jwt")?.value}
    }
}
  catch (e){
    return {error:"Internal Server Error"}
  }
}