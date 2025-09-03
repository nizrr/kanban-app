import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex h-screen">
         <Sidebar />
         <div className="w-full flex flex-1 flex-col">
            <header className="">
               <Navbar />
            </header>
            <main>{children}</main>
         </div>
      </div>
   )
}
