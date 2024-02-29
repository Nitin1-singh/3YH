import { PrismaClient } from "@prisma/client";
import {userRegisterT} from "../../web/lib/zodType/userSchema"
export const prisma = new PrismaClient();


async function createUser(data:userRegisterT) {
  const item  = await prisma.user.create({data:data})
  return {result:item.id}
}
async function loginUser(data:userRegisterT) {
  const {username, password} = data
  const item = await prisma.user.findUnique({where: {username} })
  if(item?.password === password) return {result:item.id}
}
export {createUser, loginUser}