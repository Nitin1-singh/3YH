"use client"
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/react";
import { fetchDataFromJwt } from "@/lib/user/fetchDataFromJwt";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { userState } from "@/sharedStates/user";


export function NavbarRight() {
  const [user, setUser] = useRecoilState<any>(userState)
  const { data, isSuccess, isLoading } = useQuery({ queryKey: ["getJwt"], queryFn: async () => { return fetchDataFromJwt() } })
  if (isLoading) return (
    <NavbarContent justify="end">
      <NavbarItem>
        <p>Loading ....</p>
      </NavbarItem>
    </NavbarContent>
  )
  if (isSuccess) {
    setUser(data?.data.data)
    if (user != null && user != undefined) {
      return (
        <NavbarContent justify="end">
          <NavbarItem>
            <Avatar isBordered src={user.photo} />
          </NavbarItem>
        </NavbarContent>
      )
    }
  }
  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Button radius="sm" as={Link} color="secondary" variant="bordered" href="/login">Login</Button>
      </NavbarItem>
      <NavbarItem>
        <Button radius="sm" as={Link} color="primary" href="/register" variant="solid">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  )
}