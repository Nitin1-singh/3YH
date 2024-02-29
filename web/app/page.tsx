import { HeroImage } from "@/components/home/HeroImage";
import { HeroText } from "@/components/home/HeroText";

export default function Home() {
  return (
    <main className="w-11/12 mx-auto">
      <section className="flex flex-row items-center justify-evenly">
        <HeroText />
        <HeroImage />
      </section>
    </main>
  )
}