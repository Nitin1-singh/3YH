import { Image } from "@nextui-org/react";
import { CompetitionCard } from "./CompetitionCard";

export function ActiveCompetition() {
  return (
    <div className="flex flex-col gap-y-4 mt-5">
      <div className="flex flex-row items-center gap-3">
        <Image src="/home/time.svg" width={30} height={30} />
        <p>Active Competition</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <CompetitionCard />
      </div>
    </div>
  )
}