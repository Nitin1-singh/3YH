"use client"
import axios from "axios"
import { CompCard } from "./CompCard"
import { useQuery } from "@tanstack/react-query"

export function CompetitionCard() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["getCompetition"], queryFn: async () => {
      return await axios.get(process.env.NEXT_PUBLIC_NODE_API+"/comp")
    }

  })
  if (isLoading) return <p>Loading...</p>
  if (isSuccess) {
    return (
      data != null ?  data.data.data.map((d) => (
        <CompCard key={d.id} id={d.id} src={d.photo} title={d.title} />
      ))
        : null
    )
  }
}