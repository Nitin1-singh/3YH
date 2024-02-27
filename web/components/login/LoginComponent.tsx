"use client"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import PasswordInput from "../password/PasswordInput";
import { useForm } from "react-hook-form";
import { userRegisterT, userRegisterZ } from "@/lib/zodType/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@nextui-org/link";

const handleLogin = (data: userRegisterT) => {
  console.log(data)
}

export default function LoginComponent() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<userRegisterT>({ resolver: zodResolver(userRegisterZ) })
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleLogin)} >
      <div>
        <Input color={errors.username ? "danger" : "default"} radius="sm" {...register("username")} errorMessage={errors.username?.message} type="text" label="Username" variant="bordered" placeholder="Enter your username" />
      </div>
      <div>
        <PasswordInput register={register("password")} error={errors.password?.message} />
      </div>
      <div className="grid grid-cols-1">
        <Button radius="sm" type="submit">Login</Button>
      </div>
    </form>
  )
}