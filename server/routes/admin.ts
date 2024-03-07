import { Router } from "express";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"

import multer from "multer";
import { storageDB } from "../lib/bucket/bucket";


export const adminRouter = Router() 
const upload = multer({storage:multer.memoryStorage()})

adminRouter.post("/",upload.fields([{name:"image"},{name:"train"}]),async(req,res)=>{
  try {
    const train = req.files["train"][0]
    const image = req.files["image"][0]
    const title = req.body.title

    const storageRef1 = ref(storageDB,`images/${title}/${train.originalname}`)
    const storageRef3 = ref(storageDB,`images/${title}/${image.originalname}`)

    const snap1 = await uploadBytesResumable(storageRef1,train.buffer,{contentType: train.mimetype})
    const snap3 = await uploadBytesResumable(storageRef3,image.buffer,{contentType: image.mimetype})

    const img = await getDownloadURL(snap3.ref)
    const trn = await getDownloadURL(snap1.ref)

    res.json({sucess:true,img:img,train:trn})
  }catch (e) {
    res.status(500).json({succes:false,error:e})
  }
})

