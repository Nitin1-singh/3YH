import RegisterComponent from "@/components/register/RegisterComponent";

export default function RegisterRoute() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col w-1/3 mb-5 p-5 h-full border-1 border-slate-200">
        <div className="my-3">
          <h1 className="text-3xl">Register</h1>
        </div>
        <div>
          <RegisterComponent />
        </div>
      </div>
    </main>
  )
}