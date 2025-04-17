'use client '
import { Lexend } from "next/font/google";
import InputEmailCopy from "./InputEmailCopy"
import SocialMedia from "../social/SocialMedia";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

export default function InitialContent() {

  return <>
    <div className="flex flex-col justify-center h-full">
      <div>
        <h2 className="text-gray-500 text-xl pb-2 font-semibold">Olá, eu sou</h2>
        <h1 className={`${titleFont.className} pb-4 font-bold md:text-6xl text-5xl tracking-wider`}>
          <span className=" pr-2  bg-gradient-to-r from-[#00aed5] to-[#2130cf] bg-clip-text text-transparent">            Tone
          </span>
          <span className="gradient-stroke">Revetler</span>
        </h1>
        <h3 className="text-gray-600 text-xl md:text-2xl font-semibold">Full-stack <span className="text-blue-700 font-bold">Web Developer</span></h3>
      </div>
      <p className="text-gray-600 text-base md:w-2/3 pt-4 md:pt-10">
        Se você está procurando um Designer dedicado e apaixonado pelo que faz, estou á disposição para conversar!
        Se você está procurando um Designer dedicado e apaixonado pelo que faz, estou á disposição para conversar!
      </p>
      < SocialMedia />
      < InputEmailCopy />
    </div>
  </>
}
