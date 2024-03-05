"use server"

import { UserBadge } from "@/components/user/UserBadge"
import { UserText } from "@/components/user/UserText"

export default async function () {
  return (
    <main className="w-11/12 h-3/4 mx-auto ps-2">
      <section className="flex flex-col justify-center">
       <UserText />
        <div className="h-[150px] flex flex-col">
          <div>
            <p className="text-2xl">Participated Competition 🔥</p>
          </div>
          <div className="mt-auto">
            <UserBadge src="/home/trophy.svg" text={"Competition"} />
          </div>
        </div>
        <div className="mt-20 justify-self-end border-t-1 border-slate-400" />
      </section>
    </main>
  )
}