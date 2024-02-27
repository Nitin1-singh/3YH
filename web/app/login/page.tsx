import LoginComponent from "@/components/login/LoginComponent";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function LoginRoute() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="w-1/3 mt-5">
        <div className="border-1 border-slate-200 p-5">
          <h1 className="text-2xl my-3">Sign in</h1>
          <LoginComponent />
        </div>
      </div>
      <div className="flex flex-col items-center w-1/3">
        <div className="flex flex-row items-center justify-center w-full mt-3">
          <span className="w-1/3 border-t-1 border-slate-200" /><span className="w-1/3 text-sm ">Don't have a account?</span><span className="w-1/3 border-t-1  border-slate-200" />
        </div>
        <div className="mt-3 w-full">
          <Button className="w-full" as={Link} href="/register" radius="sm">Create Your Account</Button>
        </div>
      </div>
    </main>
  )
}