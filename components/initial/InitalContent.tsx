'use client'

import { Lexend } from "next/font/google";
import Lottie from "lottie-react";
import animationData from "../../src/assets/lottie/handHello.json";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowDownRight, FiMapPin } from "react-icons/fi";
import SocialMedia from "../social/SocialMedia";


const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

// Componente de animação separado
function HandAnimation() {
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setShowLottie(true));
    } else {
      setTimeout(() => setShowLottie(true), 300);
    }
  }, []);

  return showLottie ? (
    <div aria-hidden="true">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 40, height: 40 }}
      />
    </div>
  ) : (
    <Image src="/images/Icon/hand-fallback.png" alt="" width={40} height={40} className="bg-cover" />
  );
}

// Componente principal
export default function InitialContent() {
  return (
    <div className="flex h-full flex-col justify-center text-animation">
      <div className="mb-7 inline-flex w-fit items-center gap-2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.13em] text-blue-800 sm:text-xs sm:tracking-[0.16em]">
        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        Disponível para oportunidades
      </div>
      <div>
        <div className="flex items-center text-base font-semibold text-slate-500">
          <HandAnimation />
          <span>Olá, eu sou</span>
        </div>
        <h1 className={`${titleFont.className} mt-2 text-5xl font-bold leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl`}>
          Tone Revetler
        </h1>
        <h2 className={`${titleFont.className} mt-5 max-w-2xl text-2xl font-bold leading-tight text-blue-700 sm:text-3xl`}>
          Transformo necessidades de e-commerce em experiências Shopify sob medida.
        </h2>
      </div>
      <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
        Desenvolvedor front-end com cerca de três anos de experiência em Shopify e Liquid, atuando entre design, implementação e evolução de lojas para o Brasil e os Estados Unidos.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href="#project" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800">
          Explorar projetos
          <FiArrowDownRight aria-hidden="true" />
        </a>
        <a href="mailto:mirandatone@outlook.com" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:border-slate-900">
          Entrar em contato
        </a>
      </div>

      <dl className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-5">
        <div className="pr-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Experiência</dt>
          <dd className="mt-1 text-lg font-black text-slate-950">3 anos</dd>
        </div>
        <div className="px-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Especialidade</dt>
          <dd className="mt-1 text-lg font-black text-slate-950">Shopify</dd>
        </div>
        <div className="pl-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mercados</dt>
          <dd className="mt-1 text-lg font-black text-slate-950">BR + EUA</dd>
        </div>
      </dl>

      <div className="mt-6 flex items-center gap-5">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-500"><FiMapPin aria-hidden="true" /> Indaiatuba, SP</span>
        <SocialMedia />
      </div>
    </div>
  );
}
