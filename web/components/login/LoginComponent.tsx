"use client"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import PasswordInput from "../password/PasswordInput";
import { useForm } from "react-hook-form";
import { userRegisterT, userRegisterZ } from "@/lib/zodType/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";import { handleLoginLib } from "@/lib/user/handleLogin";
import { useMutation } from "@tanstack/react-query";

export default function LoginComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm<userRegisterT>({ resolver: zodResolver(userRegisterZ) })
  const mutation = useMutation({
    mutationFn:
      async (e: userRegisterT) => {
        return handleLoginLib(e)
      },
  }
  )
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit((e)=>mutation.mutate(e))} >
      {<p className="text-sm text-red-500">{mutation.data?.msg}</p>}

      <div>
        <Input isDisabled={mutation.isPending} color={errors.username ? "danger" : "default"} radius="sm" {...register("username")} errorMessage={errors.username?.message} type="text" label="Username" variant="bordered" placeholder="Enter your username" />
      </div>
      <div>
        <PasswordInput loading={mutation.isPending} register={register("password")} error={errors.password?.message} />
      </div>
      <div className="grid grid-cols-1 mt-2">
        <Button isLoading={mutation.isPending} radius="sm" color="success" variant="shadow" type="submit">Login</Button>
      </div>
    </form>
  )
}