"use server"
import { cookies } from "next/headers"

const  fetchDataFromJwt = async() => {
  try {
    const auth = cookies().get("jwt")?.value
    if(auth) {
      const res = await fetch(process.env.NEXT_PUBLIC_NODE_API+"/user/getUser",{
        method: "POST",
        body:JSON.stringify({token:auth}),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await res.json()
      if (data.sucess)   return {data:data}
    }
  }
  catch (e) {
    return {error:"Internal Servor Errror",errorMsg:e}
  }
}

export {fetchDataFromJwt}