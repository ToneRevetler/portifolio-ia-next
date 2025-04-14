'use client'

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavBarToggle = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="border-b-1 border-gray-200">
      <div className="container mx-auto py-4 grid grid-cols-2 md:grid-cols-3">
        <h1 className="text-5xl font-bold text-blue-500">TR</h1>
        <button
          className="md:hidden flex items-center justify-end text-blue-500"
          onClick={handleNavBarToggle}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul
          className={`${isMenuOpen ? "block" : "hidden"
            }  md:flex text-gray-900 md:text-lg gap-8 items-center justify-center font-semibold absolute md:static top-16 left-0 w-full bg-white md:bg-transparent md:w-auto`}
        >
          <li>
            <a href="/contact" className="hover:text-gray-500" >Projetos</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-500" >Experiencia</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-500" >Sobre mim</a>
          </li>
        </ul>
        <div className="hidden md:flex md:justify-end">
          <a
            href="#"
            className="flex  text-base w-fit  items-center justify-end rounded-md gap-4 px-6 py-2 text-white bg-blue-500">
            Vamos Conversar
            <FaWhatsapp className="text-2xl text-white" />
          </a>
        </div>
      </div>
    </nav>
  )
}