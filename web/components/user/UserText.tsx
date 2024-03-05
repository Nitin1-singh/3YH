"use client"

import { fetchDataFromJwt } from "@/lib/user/fetchDataFromJwt"
import { useEffect, useState } from "react"

export function UserText() {
  const [user, setUser] = useState(" ")
  useEffect(() => {
    fetchDataFromJwt().then((data) =>
      setUser(data?.data)
    )
  }, [])
  return (
    <div className="h-[150px] flex flex-col justify-center">
      <p className="text-3xl font-bold">Welcome,{user?.username}</p>
      <span className="text-sm text-[rgb(81,83,85)]">Jump back in, or start something new.</span>
    </div>
  )
}