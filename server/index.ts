import express from "express"
const app = express()

app.get("/",(req,res)=>{
  res.json("hi 123")
})

app.listen(4000,()=>{
  console.log("Listing at port 4000")
})