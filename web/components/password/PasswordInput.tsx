"use client"
import React from "react";
import { Input } from "@nextui-org/input";
import { EyeFilledIcon } from "./EyeIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
export default function PasswordInput({ register, error, loading }: { error: any, register: any,loading:boolean | undefined }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      isDisabled={loading}
      {...register}
      color={error ? "danger" : "default"}
      radius="sm"
      errorMessage={error}
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
}
