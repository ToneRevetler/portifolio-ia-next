'use client'

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";


export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavBarToggle = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav aria-label="Navegação principal">
        <div className="mx-auto grid min-h-18 max-w-7xl grid-cols-2 items-center px-5 md:grid-cols-3 md:px-8">
          <div className="flex items-center">
            <Link href="/" aria-label="Página inicial de Tone Revetler" className="group inline-flex items-center gap-3">
              <Image
                src="/images/project/logo.svg"
                alt=""
                width={68}
                height={56}
                priority
                className="h-12 w-auto object-contain"
              />
              <span className="hidden text-sm font-bold leading-tight text-slate-900 sm:block">
                Tone Revetler
                <span className="block text-xs font-medium text-slate-500">Desenvolvedor Web</span>
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="flex items-center justify-end text-slate-900 md:hidden"
            onClick={handleNavBarToggle}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            {isMenuOpen ? <FaTimes size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
          </button>
          <ul
            id="primary-navigation"
            className={`${isMenuOpen ? "block" : "hidden"
              } absolute left-0 top-18 z-10 w-full border-b border-slate-200 bg-white px-5 py-6 text-lg font-semibold text-slate-800 shadow-xl md:static md:flex md:w-auto md:items-center md:justify-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:text-sm md:shadow-none`}
          >
            <li className="py-3 md:py-0">
              <a href="/#project" className="transition hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Projetos</a>
            </li>
            <li className="border-t border-slate-200 py-3 md:border-0 md:py-0">
              <a href="/#experience" className="transition hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Experiência</a>
            </li>
            <li className="border-t border-slate-200 py-3 md:border-0 md:py-0">
              <a href="/#aboutMe" className="transition hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            </li>
            <li className="border-t border-slate-200 py-3 md:border-0 md:py-0">
              <a href="/#contact" className="transition hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Contato</a>
            </li>
          </ul>
          <div className="hidden md:flex md:items-center md:justify-end">
            <a
              href="https://wa.me/5519981135074"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vamos conversar pelo WhatsApp (abre em nova aba)"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Vamos conversar
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
