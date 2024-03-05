import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";

export function UserBadge({ text, src }: { text: string, src: string }) {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <Image width={30} height={30} src={src} />
        <div>
          <p className="font-bold">{text}</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 mt-4">
        <div className="relative w-[40px] h-[50px]">
          <div className="absolute w-1/2 right-0 h-full border-l-1 border-t-1 border-b-1 border-rgb(218, 220, 224)" />
        </div>
        <Tooltip color="primary" showArrow content="All Participated Contest">
          <div>
            <p className="text-xl">0</p>
            <p className="text-xs">Total joined</p>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}