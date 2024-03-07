import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Avatar } from "@nextui-org/avatar";

export function SingleResult({ index, name, photo, score }: { name: string, index: number, photo: string, score: number }) {
  return (
    <div className="flex flex-row items-center justify-between text-sm">
      <p className="w-[100px]">{index}</p>
      <p className="w-[100px]">{name}</p>
      <p className="w-[100px]">{score.toPrecision(3)}</p>
      <div className="w-[100px]">
        <Avatar className="mx-auto" src={photo} />
      </div>
    </div>
  )
}

export function Result(user) {
  return (
    <Card>
      <CardBody className="flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between">
          <p className="w-[100px]">#</p>
          <p className="w-[100px]">Username</p>
          <p className="w-[100px]">Score</p>
          <p className="w-[100px]">Members</p>
        </div>
        {user.user.map((d, i) => (
          <SingleResult key={i} name={d.name} photo={d.photo_url} score={d.score} index={i} />
        ))}
      </CardBody>
    </Card>
  )
}


export function DetailOverView({ overview }: { overview: string }) {
  return (
    <Card>
      <CardBody>
        {overview}
      </CardBody>
    </Card>
  )
}

export function DetailData({ train }: { train: string }) {
  return (
    <Card>
      <CardBody>
        <Link href={train}>Dataset Download</Link>
      </CardBody>
    </Card>
  )
}
