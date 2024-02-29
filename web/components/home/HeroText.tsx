import { Button } from "@nextui-org/button";

export function HeroText() {
  return (
    <div className="basis-1/2">
      <p className="text-5xl font-semibold">Level up with the largest AI & ML community</p>
      <p className="text-[#5F6368] my-5">Join our machine learning spot to share, stress test, and stay up-to-date on all the latest ML techniques and technologies. Discover a huge repository of community-published models, data & code for your next project.</p>
      <div className="flex gap-3">
        <Button variant="shadow" color="secondary" >Register</Button>
        <Button variant="bordered" color="primary" >Login</Button>
      </div>
    </div>
  )
}