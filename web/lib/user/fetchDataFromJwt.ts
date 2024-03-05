"use server"
import { cookies } from "next/headers"

const  fetchDataFromJwt = async() => {
  try {
    const auth = cookies().get("jwt")?.value
    if(auth) {
      const res = await fetch("http://localhost:4000/user/getUser",{
        method: "POST",
        body:JSON.stringify({token:auth}),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await res.json()
      if (data.sucess)   return {sucess:true,data:data.data}
      else throw new Error("Internal Servor Error")
    }
  }
  catch (e) {
    return {sucess:false,error:"Internal Servor Errror",errorMsg:e}
  }
}

export {fetchDataFromJwt}