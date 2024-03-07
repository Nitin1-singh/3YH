"use client"
import { DownloadDetail } from "@/components/compDetail/DownloadDetail";
import { TextDetail } from "@/components/compDetail/TextDetail";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export function WrapperComp() {
  const id = useSearchParams().get("id")
  const { data } = useQuery({
    queryKey: ["selectComp"],
    queryFn: async () => {
      return await axios.post(process.env.NEXT_PUBLIC_NODE_API+"/comp/getComp", { id: id })
    }
  })
  return (
    <section className="flex flex-col justify-between mt-5">
      <TextDetail title={data?.data.data.title} start={data?.data.data.start_date} end={data?.data.data.end_date} src={data?.data.data.photo} />
      <DownloadDetail overview={data?.data.data.description} train={data?.data.data.train_data} />
    </section>
  )
}