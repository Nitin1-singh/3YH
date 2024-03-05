"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { CompCard } from "./CompCard"
export function CompetitionCard() {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get("http://localhost:4000/comp")
      .then((data) => {
        if (data.data.sucess)
          setData(data.data.data)
      })
  }, [])
  return (
    data != null ? data.map((d) => (
      <CompCard key={d.id} id={d.id} src={d.photo} title={d.description} />
    ))
      : null
  )
}