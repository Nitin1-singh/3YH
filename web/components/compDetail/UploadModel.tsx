"use client"
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "@/sharedStates/user";
import { useSearchParams } from "next/navigation";
export function UploadModel() {
  const [file, setFile] = useState()
  const param = useSearchParams().get("id")
  const [user,setUser] = useRecoilState(userState)
  const handleForm = async(e) => {
    try {
      e.preventDefault()
      const form = new FormData()
      form.set("file", file)
      axios.post(process.env.NEXT_PUBLIC_FLASK_API+"/eval",form).then((d)=>{
        if(d.data.sucess) axios.post(process.env.NEXT_PUBLIC_NODE_API+"/result",{user:user,comp:param,score:d.data.score})
      })
    }
    catch(e) {
      console.log("error ",e)
    }
  } 
  return (
    <Card>
      <CardBody className="flex flex-col justify-between">
        <form onSubmit={handleForm} className="flex flex-col">
          <input required type="file" onChange={(e) => setFile(e.target.files[0])} name="model" accept=".pkl" />
          <div className="flex my-5" >
            <Button type="submit" >Submit</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}