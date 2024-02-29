import { sign } from "jsonwebtoken"
function createToken(id:{id:string | undefined}) {
  return sign(id,"123")
}

export {createToken}