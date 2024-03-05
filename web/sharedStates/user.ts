import { atom } from "jotai";

type userAtomT = {
  id:string  | undefined
  username:string | undefined
  photo:string | undefined
}

const userAtom = atom<userAtomT | null | undefined>(undefined)

export {userAtom}