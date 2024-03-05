import { PrismaClient } from "@prisma/client";
import {userRegisterT} from "../../web/lib/zodType/userSchema"
export const prisma = new PrismaClient();


async function createUser(data:userRegisterT) {
  const item  = await prisma.user.create({data:data})
  return {result:item.id,username:item.username,photo:item.profile_img}
}
async function loginUser(data:userRegisterT) {
  const {username, password} = data
  const item = await prisma.user.findUnique({where: {username} })
  if(item?.password === password) return {result:item.id,username:item.username,photo:item.profile_img}
}

export type Tdata = {   
  description:string
  photo:string 
  end_date:string
  test_data:String
  train_data:String
}

async function createCompetiton(data) {
  const res = await prisma.competition.create({data:data}) 
}

async function getAllCompetition() {
  const res = await prisma.competition.findMany()
  return res
}

export {createUser, loginUser, createCompetiton, getAllCompetition}