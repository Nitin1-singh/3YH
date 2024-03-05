"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { ChevronDown } from "./ChevronIcon";

export function CompetitionBox() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          disableRipple
          endContent={<ChevronDown fill="black" />}
          variant="light"
        >
          Competition
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" href="/competition">All Competition</DropdownItem>
        <DropdownItem key="copy" href="/home/competition" >My Competiton</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}