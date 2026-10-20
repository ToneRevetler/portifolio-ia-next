'use client'

import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
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
            className="action-control action-row flex items-center justify-end justify-self-end rounded-md p-2 text-slate-900 md:hidden"
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
              <Link href="/#project" className="action-control action-nav" onClick={() => setIsMenuOpen(false)}>Projetos</Link>
            </li>
            <li className="border-t border-slate-200 py-3 md:border-0 md:py-0">
              <Link href="/#experience" className="action-control action-nav" onClick={() => setIsMenuOpen(false)}>Experiência</Link>
            </li>
            <li className="border-t border-slate-200 py-3 md:border-0 md:py-0">
              <Link href="/#aboutMe" className="action-control action-nav" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
            </li>
            <li className="border-t border-slate-200 py-3 md:border-0 md:py-0">
              <Link href="/#contact" className="action-control action-nav" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            </li>
          </ul>
          <div className="hidden md:flex md:items-center md:justify-end">
            <a
              href="https://wa.me/5519981135074"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vamos conversar pelo WhatsApp (abre em nova aba)"
              className="action-control action-button action-dark inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-bold text-white"
            >
              Vamos conversar
              <FaWhatsapp size={18} aria-hidden="true" className="shrink-0" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
