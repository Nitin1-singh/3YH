"use client"
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

import { FormEvent, useState } from "react";

export function UploadFile() {
  const [img, setImg] = useState<File>()
  const [train, setTrain] = useState<File>()
  const [test, setTest] = useState<File>()
  const [title, setTitle] = useState<String>()
  const [overview, setOverview] = useState<String>()
  const [end, setEnd] = useState<string>()


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData()
    data.set("image", img!)
    data.set("train", train!)
    data.set("test", test!)
    data.set("title", title)

    const res = await fetch("http://localhost:4000/admin", {
      method: "POST",
      body: data
    })
    const item = await res.json()
    if (item.sucess) {
      const data = {
        title: title,
        image: item.img,
        test: item.test,
        train: item.train,
        description: overview,
        end:end
      }
      const res = await fetch("http://localhost:4000/comp", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(res.json())
    }

  }

  return (
    <section>
      <form className="flex flex-col gap-3 mt-3" onSubmit={handleSubmit}>
        <div className="flex flex-col w-1/4">
          <Input onChange={(e) => setTitle(e.target.value)} size="lg" variant="bordered" label="Title" placeholder="Enter the name of competiton" />
        </div>
        <div className="flex flex-col w-1/4">
          <Input onChange={(e) => setEnd(e.target.value)}  size="lg" variant="bordered" label="start" placeholder="Enter the end of competition in hr" />
        </div>
        <div className="flex flex-col w-1/4">
          <Textarea onChange={(e) => setOverview(e.target.value)} variant="bordered" placeholder="Enter the description" />
        </div>
        <div className="flex flex-col gap-3">
          <label>Upload the thumbnail</label>
          <input onChange={(e) => setImg(e.target.files?.[0])} accept="image/*" type="file" name="image" />
        </div>
        <div className="flex flex-col gap-3">
          <label>Upload the train csv</label>
          <input onChange={(e) => setTrain(e.target.files?.[0])} accept=".csv" type="file" name="train" />
        </div>
        <div className="flex flex-col gap-3">
          <label>Upload the test csv</label>
          <input onChange={(e) => setTest(e.target.files?.[0])} accept=".csv" type="file" name="test" />
        </div>
        <div>
          <Button type="submit" >Upload</Button>
        </div>
      </form>
    </section>
  )
}