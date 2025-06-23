import { Lexend } from "next/font/google";
import ProjectCard from "./projects/card";
import GradientText from "../src/assets/gps-lib/GradientText";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

const imgCasaSol = "/images/project/CasaSolMockup.png"
const imgEcoFlame = "/images/project/EcoFlameMockup.png"
const imgOceanPools = "/images/project/OceanPoolsMockup.png"
const SofaNaCaixa = "/images/project/SofaNaCaixalMockup.png"

export default function ProjectSection() {
  return <>
    <section id="project" className="bg-gray-50 py-12 p-4 scroll-smooth">
      <div className="container mx-auto">
        <GradientText
          colors={["#2130cf", "#535dca ", "#c7ccff", "#535dca ", "#2130cf"]}
          animationSpeed={6}
          showBorder={false}
          className="custom-class text-xl"
        >
          O QUE EU JÁ FIZ?
        </GradientText>
        <h2 className={`${titleFont.className} text-gray-800 pt-2  font-bold md:text-5xl tracking-wider`}>Meus Projetos</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-8 mt-8 md:mt-12">
        <ProjectCard
          title="Casa Sol outdoor"
          description="Projeto Freelance criado dentro de uma loja shopify, componentes personalizados em Liquid. Esse e-commerce atua no mercado dos Estados Unidos."
          imageUrl={imgCasaSol}
          link="https://casasoloutdoor.com/"
        />
        <ProjectCard
          title="Ocean Pools"
          description="Freelance criado para uma empreasa de piscinas já existente. Uma landing page com contato para gerar leads. Feito com WordPress e alguns plugins."
          imageUrl={imgOceanPools}
          link="https://oceanpoolsfl.com/"
        />
        <ProjectCard
          title="Sofá Na Caixa"
          description="Grande e-commerce onde atuo como funcionário. Utilizando Liquid, HTML, CSS e JavaScript desenvolvendo um tema praticamente novo. Esse e-commerce atua no mercado brasileiro."
          imageUrl={SofaNaCaixa}
          link="https://sofanacaixa.com.br/"
        />
        <ProjectCard
          title="Eco Flame Garden"
          description="E-commerce de produtos para área externa atuo com funcionário. Utilizando Liquid, HTML, CSS e JavaScript. Esse e-commerce é completamente personalizado e único."
          imageUrl={imgEcoFlame}
          link="https://www.ecoflamegarden.com.br/"
        />
      </div>
    </section>
  </>
}
