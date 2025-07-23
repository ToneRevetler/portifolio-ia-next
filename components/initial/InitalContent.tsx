'use client'

import { Lexend } from "next/font/google";
import InputEmailCopy from "./InputEmailCopy"
import SocialMedia from "../social/SocialMedia";
import Lottie from "lottie-react";
import animationData from "../../src/assets/lottie/handHello.json";
import { useState, useEffect } from "react";
import Image from "next/image";


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
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: 40, height: 40 }}
    />
  ) : (
    <Image src="/images/icon/hand-fallback.png" alt="Olá" width={40} height={40} className="bg-cover" />
  );
}

// Componente principal
export default function InitialContent() {
  return (
    <div className="flex flex-col justify-center h-full text-animation ">
      <div>
        <h2 className="text-gray-500 text-xl font-semibold flex items-center">
          <HandAnimation />
          Olá, eu sou
        </h2>
        <h1 className={`${titleFont.className} pb-4 leading-none  font-bold md:text-6xl text-4xl tracking-wider `}>
          <span className="pr-2 bg-gradient-to-r from-[#00aed5] to-[#2130cf] bg-clip-text text-transparent">Tone</span>
          <span className="gradient-stroke">Revetler</span>
        </h1>
        <h3 className="text-gray-600 text-xl md:text-2xl font-semibold">
          Full-stack <span className="text-blue-700 font-bold">Web Developer</span>
        </h3>
      </div>
      <p className="text-gray-600 text-base md:w-2/3 pt-4 md:pt-10">
        Se você está buscando um Desenvolvedor dedicado, apaixonado por criar interfaces incríveis e sempre em evolução, estou à disposição para conversar! Vamos transformar ideias em projetos reais e impactantes!
      </p>
      <SocialMedia />
      <InputEmailCopy />
    </div>
  );
}
