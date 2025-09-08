'use client'

import { Lexend } from "next/font/google";
import GradientText from "@/assets/gps-lib/GradientText";
import AccordionItems from "../Accordion/AccordionItems/AccordionItems";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });


export default function ExperienceAccordion() {
  return <>
    <section className="container mx-auto py-12 md:px-4">
      <div className="grid px-4 md:px-0 md:grid-cols-2 gap-8 md:gap-4">
        <div>
          <GradientText
            colors={["#2130cf", "#535dca ", "#c7ccff", "#535dca ", "#2130cf"]}
            animationSpeed={6}
            showBorder={false}
            className="custom-class text-xl"
          >
            MINHA CARREIRA
          </GradientText>
          <h2 className={`${titleFont.className} text-gray-800 pt-2  font-bold md:text-5xl text-3xl tracking-wider`}>Experiências</h2>
          <p className="pt-4 text-gray-600 text-base">Ao longo da minha trajetória, participei de projetos que me desafiaram a evoluir tecnicamente e colaborar em equipes multidisciplinares.</p>
        </div>
        <div>
         < AccordionItems />
        </div>
      </div>
    </section>
  </>
}