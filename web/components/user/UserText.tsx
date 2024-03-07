"use client"
import { userState } from "@/sharedStates/user"
import { useRecoilState } from "recoil"

export function UserText() {
  const [user, setUser] = useRecoilState(userState)
  return (
    <div className="h-[150px] flex flex-col justify-center">
      <p className="text-3xl font-bold">Welcome,{user?.username}</p>
      <span className="text-sm text-[rgb(81,83,85)]">Jump back in, or start something new.</span>
    </div>
  )
}