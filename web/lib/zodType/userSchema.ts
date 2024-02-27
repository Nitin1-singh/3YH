import {z} from "zod"
const userRegisterZ = z.object({
  username:z.string().min(5,"Username must be of at least 5 character"),
  password:z.string().min(5,"Password must be of at least 5 character"),
})

type userRegisterT = z.infer<typeof userRegisterZ>
export type {userRegisterT}
export {userRegisterZ}