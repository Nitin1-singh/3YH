import { Image } from "@nextui-org/image";
import { TimeLine } from "./Timeline";
export function TextDetail({ title, src, start, end }: { title: string, src: string, start: string, end: string }) {
  return (
    <section className="flex flex-row justify-between">
      <div className="basis-1/2 mt-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <TimeLine start={start} end={end} />
      </div>
      <div className="basis-1/4">
        <Image height={200} width={200} src={src} />
      </div>
    </section>
  )
}