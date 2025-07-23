'use client'

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import WhatsAppButton from "./social/WhatsAppButton"


export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavBarToggle = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="border-b-1 border-gray-200">
      <div className="container mx-auto py-4 grid grid-cols-2 px-4 md:px-0 md:grid-cols-3">
        <div>
          <Image src="/images/project/Logo.png" alt="Logo" width={80} height={80} className="w-18 h-14 md:h-12 md:w-16" />
        </div>

        <button
          className="md:hidden flex items-center justify-end text-blue-500"
          onClick={handleNavBarToggle}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul
          className={`${isMenuOpen ? "block" : "hidden"
            }  md:flex text-xl md:text-lg shadow-lg md:gap-4 md:shadow-none text-blue-800 px-4 py-8 md:py-0 items-center justify-center font-semibold absolute md:static top-16 left-0 w-full bg-white md:bg-transparent md:w-auto`}
        >
          <li className="py-4 md:py-0 ">
            <a href="#project" className="hover:text-gray-500 scroll-smooth" >Projetos</a>
          </li>

          <hr className="border-gray-300 " />
          <li className="py-4 md:py-0 ">
            <a href="#aboutMe" className="hover:text-gray-500" >Sobre mim</a>
          </li>
          <div className="md:hidden">
            < WhatsAppButton />
          </div>

        </ul>
        <div className="hidden md:flex md:items-center md:justify-end ">
          < WhatsAppButton />
        </div>
      </div>
    </nav>
  )
}