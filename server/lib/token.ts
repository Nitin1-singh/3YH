import { sign, verify } from "jsonwebtoken"
function createToken({id,username,photo}:{id:string | undefined,username:string | undefined,photo:string | undefined}) {
  return sign({id,username,photo},"123")
}
function verifyToken(token:string) {
  return verify(token,"123")
}

export {createToken, verifyToken}