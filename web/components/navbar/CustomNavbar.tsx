"use server"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default async function CustomNavbar() {

  return (
    <Navbar isBordered className="mb-3" maxWidth="xl">
      <NavbarContent justify="start">
        <NavbarBrand>
          <p className="text-3xl font-bold text-inherit">3YH</p>
        </NavbarBrand>
        <NavbarItem>
          <Link href="/competition">Competition</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="start">
      </NavbarContent>
      <NavbarContent justify="start">
      </NavbarContent>
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
    </Navbar>
  );
}
