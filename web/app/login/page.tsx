"use server"
import LoginComponent from "@/components/login/LoginComponent";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default async function LoginRoute() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-1/4 mt-5 border-1 border-slate-200 rounded-lg">
        <div className="flex flex-col items-center ">
          <h1 className="text-5xl my-3 px-auto">3YH</h1>
          <h1 className="place-self-start text-2xl ps-3">Sign in</h1>
        </div>
        <div className="p-3">
          <LoginComponent />
        </div>
        <div className="flex flex-row items-center mt-3 text-sm font-medium ps-3">
          <span>Dont have a account?</span><span><Link className="ms-1" size="sm" href="/register">Register</Link></span>
        </div>
        <div className="flex justify-end">
          <Image width={100} height={100} src="/login/login-box.png" alt="image" />
        </div>
      </div>
    </main>
  )
}