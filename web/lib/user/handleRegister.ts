import { userRegisterT } from "../zodType/userSchema"

export const handleRegister = async(data:userRegisterT) =>{
  console.log("Register data = ",data)
  const res = await fetch("http://localhost:4000/user",{
    method:"POST",
    body: JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  })
  console.log("Reg Res = ",await res.json())
}