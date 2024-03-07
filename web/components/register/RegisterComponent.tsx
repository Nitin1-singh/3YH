"use client"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import PasswordInput from "../password/PasswordInput";
import { useForm } from "react-hook-form";
import { userRegisterT, userRegisterZ } from "@/lib/zodType/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@nextui-org/link";
import { handleRegisterLib } from "@/lib/user/handleRegister";
import { useMutation } from "@tanstack/react-query";


export default function RegisterComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm<userRegisterT>({ resolver: zodResolver(userRegisterZ) })

  const mutation = useMutation({
    mutationFn:
      async (e: userRegisterT) => {
        return handleRegisterLib(e)
      },
  }
  )

  // register component
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit((e) => mutation.mutate(e))} >
      <p className="text-sm text-red-600">{mutation.data?.error}</p>
      <div>
        <Input isDisabled={mutation.isPending} color={errors.username ? "danger" : "default"} radius="sm" {...register("username")} errorMessage={errors.username?.message} type="text" label="Username" variant="bordered" placeholder="Enter your username" />
      </div>
      <div>
        <PasswordInput loading={mutation.isPending} register={register("password")} error={errors.password?.message} />
      </div>
      <div className="grid grid-cols-1">
        <Button isLoading={mutation.isPending} radius="sm" variant="solid" color="success" type="submit">Register</Button>
      </div>
      <div className="text-sm">
        <span>Already have a account?</span><Link href="/login" className="px-1 text-sm">Sign in</Link>
      </div>
    </form>
  )
}