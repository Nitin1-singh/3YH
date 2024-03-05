"use client"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import Link from "next/link"
import { useState } from "react"

export function CompCard({ src, id, title }: { src: string, id: string, title: string }) {
  const [link, setLink] = useState<string>()
  return (
    <Link href={{ pathname: `/competition/${link}`, query: { comp: link } }}>
      <Card key={id} id={id} shadow="sm" className="border-1 border-[#dadce0]" isPressable onClick={(e) => setLink(e.currentTarget.id)} >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            alt={"competition"}
            className="w-full object-cover h-[140px]"
            src={src}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{title}</b>
        </CardFooter>
      </Card>
    </Link>
  )

}