"use client"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import PasswordInput from "../password/PasswordInput";
import { useForm } from "react-hook-form";
import { userRegisterT, userRegisterZ } from "@/lib/zodType/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@nextui-org/link";
import { boolean } from "zod";
import { useState } from "react";
import { handleLoginLib } from "@/lib/user/handleLogin";


export default function LoginComponent() {
  const [loading, setLoading] = useState<boolean | undefined>(false)
  const [error, setError] = useState<string | null | undefined>(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<userRegisterT>({ resolver: zodResolver(userRegisterZ) })
  const handleLogin = async (data: userRegisterT) => {
    setError(null)
    setLoading(true)
    const res = await handleLoginLib(data)
    setTimeout(() => {
      setLoading(false)
      setError(res)
    }, 3000)
  }
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleLogin)} >
      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <div>
        <Input isDisabled={loading} color={errors.username ? "danger" : "default"} radius="sm" {...register("username")} errorMessage={errors.username?.message} type="text" label="Username" variant="bordered" placeholder="Enter your username" />
      </div>
      <div>
        <PasswordInput loading={loading} register={register("password")} error={errors.password?.message} />
      </div>
      <div className="grid grid-cols-1 mt-2">
        <Button isLoading={loading} radius="sm" color="success" variant="shadow" type="submit">Login</Button>
      </div>
    </form>
  )
}