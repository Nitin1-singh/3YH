"use client"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { useRouter } from "next/navigation"

export function CompCard({ src, id, title }: { src: string, id: string, title: string }) {
  const router = useRouter()
  return (
    <Card key={id} id={id} shadow="sm" className="border-1 border-[#dadce0]" isPressable onClick={(e) => router.push(`/competition/detail?id=${e.currentTarget.id}`)} >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="none"
          width="100%"
          alt={"competition"}
          className="w-full object-contain h-[140px]"
          src={src}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{title}</b>
      </CardFooter>
    </Card>
  )

}