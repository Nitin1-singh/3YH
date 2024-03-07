import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import { userRouter } from "./routes/user"
import { adminRouter } from "./routes/admin"
import { compRouter } from "./routes/comp"
import { resultRouter } from "./routes/result"
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
  res.json("hi 123")
})


app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.use("/comp",compRouter)
app.use("/result",resultRouter)


app.listen(4000,()=>{
  console.log("Listing at port 4000")
})