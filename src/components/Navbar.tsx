import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ModeToggle } from "@/components/ModeToggle"

const Navbar = () => {
   return (
      <div className="flex justify-between items-center py-3 bor">
         <Link
            href="/"
            className="text-2xl font-bold flex gap-2 items-center ">
            <Image
               src="/image/logo.png"
               alt="Logo"
               width={50}
               height={50}
            />
            Visuaally
         </Link>
         <ModeToggle />
      </div>
   )
}

export default Navbar
