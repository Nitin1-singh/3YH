"use server"
import { WrapperComp } from "@/components/compDetail/WrapperComp"

export default async function CompCatch() {
  return (
    <main className="w-11/12 mx-auto ps-3">
      <WrapperComp />
    </main>
  )
}