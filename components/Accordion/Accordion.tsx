'use client'

import { Lexend } from "next/font/google";
import AccordionItems from "../Accordion/AccordionItems/AccordionItems";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });


export default function ExperienceAccordion() {
  return <>
    <section id="experience" className="scroll-mt-24 bg-white px-5 py-20 sm:py-28 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div>
          <h2 className={`${titleFont.className} text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl`}>Experiência profissional</h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">Empresas em que trabalhei, cargos e principais atividades.</p>
          <p className="mt-5 text-xs leading-5 text-slate-500">Datas e informações em revisão.</p>
        </div>
        <div>
         < AccordionItems />
        </div>
      </div>
    </section>
  </>
}
