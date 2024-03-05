"use server"

import { ActiveCompetition } from "@/components/competition/ActiveCompetition"
import { CompetitionComponent } from "@/components/competition/CompetitionComponent"

export default async function CompetitionRoute() {
  return (
    <main className="flex flex-col justify-evenly w-11/12 h-screen mx-auto ps-2">
      <section>
        <CompetitionComponent />
      </section>
      <section>
        <ActiveCompetition />
      </section>
    </main>
  )
}