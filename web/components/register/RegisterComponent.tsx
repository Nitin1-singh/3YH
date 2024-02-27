"use client"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import PasswordInput from "../password/PasswordInput";
import { useForm } from "react-hook-form";
import { userRegisterT, userRegisterZ } from "@/lib/zodType/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@nextui-org/link";
import { handleRegister } from "@/lib/user/handleRegister";

const handleError = (e:any)=>{
  console.log("Error = ",e)
}
export default function RegisterComponent() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<userRegisterT>({ resolver: zodResolver(userRegisterZ) })
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleRegister,handleError)} >
      <div>
        <Input color={errors.username ? "danger" : "default"} radius="sm" {...register("username")} errorMessage={errors.username?.message} type="text" label="Username" variant="bordered" placeholder="Enter your username" />
      </div>
      <div>
        <PasswordInput register={register("password")} error={errors.password?.message} />
      </div>
      <div className="grid grid-cols-1">
        <Button radius="sm" type="submit">Register</Button>
      </div>
      <div className="text-sm">
        <span>Already have a account?</span><Link href="/login" className="px-1 text-sm">Sign in</Link>
      </div>
    </form>
  )
}