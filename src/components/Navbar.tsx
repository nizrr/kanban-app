import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ModeToggle } from "@/components/ModeToggle"

const Navbar = () => {
   return (
      <div className="flex justify-between items-center py-3 bor">
         <div></div>
         <ModeToggle />
      </div>
   )
}

export default Navbar
