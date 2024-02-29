"use server"
import { cookies } from "next/headers"
import { userRegisterT } from "../zodType/userSchema"

export const handleRegisterLib = async(data:userRegisterT) =>{ 
  try {
    const res = await fetch("http://localhost:4000/user/register",{
      method:"POST",
      body: JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const item = await res.json()
    if(item.error) return "Username already in use"
    else {
      cookies().set({
        name: "jwt",
        value: item.data,
      })
    }
}
  catch (e){
    return "Internal Server Error"
  }
}