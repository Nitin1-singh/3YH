"use server"
import React from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { CompetitionBox } from "./NavbarItems";
import { NavbarRight } from "./NavbarRight";

export default async function CustomNavbar() {
  return (
    <Navbar isBordered maxWidth="xl">
      <NavbarContent justify="start">
        <p className="text-3xl w-1/4 font-bold text-inherit">3YH</p>
        <NavbarItem>
          <Link href="/home" >Home</Link>
        </NavbarItem>
        <CompetitionBox />
      </NavbarContent>
      <NavbarRight />
    </Navbar>
  );
}
