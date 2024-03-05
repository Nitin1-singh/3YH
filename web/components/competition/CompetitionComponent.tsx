import { Image } from "@nextui-org/image"

export function CompetitionComponent() {
  return (
    <div className="flex flex-row justify-between mt-5">
      <div className="basis-1/2">
        <p className="font-bold text-3xl">Competition</p>
        <p>Grow your data science skills by competing in our exciting competitions. Find help in the documentation or learn about Community Competitions.</p>
      </div>
      <div className="basis-1/4">
        <Image src="/home/landing.svg" alt="landing" width={200} height={200} />
      </div>
    </div>
  )
}