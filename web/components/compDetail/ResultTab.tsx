"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { Result } from "./DetailOverview"

export function ResultTab() {
  const param = useSearchParams().get("id")
  const { data,isLoading } = useQuery({
    queryKey: ["getResult"], queryFn: async () => {
      return await axios.post(process.env.NEXT_PUBLIC_NODE_API+"/result/getResult", { id: param })
    }
  })
  if(isLoading) return <p>Loading ...</p>
  if (data?.data.sucess) {
    return (
      <Result user={data.data.data} />
      // <p>a</p>
    )
  }
}