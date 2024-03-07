import { sign, verify } from "jsonwebtoken"
function createToken({id,username,photo}:{id:string | undefined,username:string | undefined,photo:string | undefined}) {
  return sign({id,username,photo},process.env.TOKEN_SECRET!)
}
function verifyToken(token:string) {
  return verify(token,process.env.TOKEN_SECRET!)
}

export {createToken, verifyToken}