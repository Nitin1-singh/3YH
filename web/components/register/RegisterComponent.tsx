"use client"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import PasswordInput from "../password/PasswordInput";
import { useForm } from "react-hook-form";
import { userRegisterT, userRegisterZ } from "@/lib/zodType/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@nextui-org/link";
import { handleRegisterLib } from "@/lib/user/handleRegister";
import { useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/sharedStates/user";


export default function RegisterComponent() {
  const [loading, setLoading] = useState<boolean | undefined>(false)
  const [error, setError] = useState<string | null | undefined>(null)
  const [user, setUser] = useAtom(userAtom)
  const { register, handleSubmit, formState: { errors } } = useForm<userRegisterT>({ resolver: zodResolver(userRegisterZ) })

  const handleRegister = async (data: userRegisterT) => {
    setLoading(true)
    const res = await handleRegisterLib(data)
    setTimeout(() => {
      setLoading(false)
      if (error) setError(res.error)
      else {
        setError(null)
        setUser(res.data)
      }
    }, 3000)
  }

  // register component
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleRegister)} >
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
      <div>
        <Input isDisabled={loading} color={errors.username ? "danger" : "default"} radius="sm" {...register("username")} errorMessage={errors.username?.message} type="text" label="Username" variant="bordered" placeholder="Enter your username" />
      </div>
      <div>
        <PasswordInput loading={loading} register={register("password")} error={errors.password?.message} />
      </div>
      <div className="grid grid-cols-1">
        <Button isLoading={loading} radius="sm" variant="solid" color="success" type="submit">Register</Button>
      </div>
      <div className="text-sm">
        <span>Already have a account?</span><Link href="/login" className="px-1 text-sm">Sign in</Link>
      </div>
    </form>
  )
}