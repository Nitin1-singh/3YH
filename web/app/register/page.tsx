import RegisterComponent from "@/components/register/RegisterComponent";
import { Image } from "@nextui-org/image";

export default function RegisterRoute() {
  return (
    <main className="flex justify-center items-center my-auto">
      <div className="flex flex-col w-1/4 border-1 border-slate-200 rounded-xl mt-5">
        <div className="flex flex-col items-center gap-3 my-3">
          <h1 className="text-4xl">3YH</h1>
          <h1 className="place-self-start text-2xl ps-3">Register</h1>
        </div>
        <div className="p-3">
          <RegisterComponent />
        </div>
        <div className="flex flex-row justify-end">
          <Image width={100} height={100} src="/login/login-box.png" alt="image" />
        </div>
      </div>
    </main>
  )
}