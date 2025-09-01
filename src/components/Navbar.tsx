import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
   return (
      <div>
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
      </div>
   )
}

export default Navbar
