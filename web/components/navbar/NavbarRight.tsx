"use client"
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button";
import { useEffect, useLayoutEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";
import { fetchDataFromJwt } from "@/lib/user/fetchDataFromJwt";


export function NavbarRight() {
  const [user, setUser] = useState("")
  const [loading, setLoading] = useState(true)
  useLayoutEffect(() => {
    fetchDataFromJwt().then(
      (data) => {
        setUser(data?.data)
        setLoading(false)
      }
    )
  }, [])
  if (loading) return (<p>Loading</p>)
  else if (user) return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Avatar src={user.photo} isBordered />
      </NavbarItem>
    </NavbarContent>
  )
  else
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