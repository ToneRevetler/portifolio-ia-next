import { Lexend } from "next/font/google";
import ProjectCard from "./projects/card";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

const imgCasaSol = "/images/project/CasaSolMockup.png"
const imgEcoFlame = "/images/project/EcoFlameMockup.png"
const imgOceanPools = "/images/project/OceanPoolsMockup.png"
const SofaNaCaixa = "/images/project/SofaNaCaixalMockup.png"

export default function ProjectSection() {
  return <>
    <section id="project" className="bg-gray-50 py-12 p-4 scroll-smooth">
      <div className="text-center">
        <h3 className="uppercase text-blue-600 font-semibold">O que eu já fiz?</h3>
        <h2 className={`${titleFont.className} text-gray-800 pt-2 pb-4 font-bold md:text-5xl tracking-wider`}>Meus Projetos</h2>
        <p className="text-gray-600">Conheça alguns projetos que eu atuei.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-8 mt-8 md:mt-16">
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
          link="#"
        />
        <ProjectCard
          title="Sofá Na Caixa"
          description="Grande e-commerce onde atuo como funcionário. Utilizando Liquid, HTML, CSS e JavaScript desenvolvendo um tema praticamente novo. Esse e-commerce atua no mercado brasileiro."
          imageUrl={SofaNaCaixa}
          link="#"
        />
        <ProjectCard
          title="Eco Flame Garden"
          description="E-commerce de produtos para área externa atuo com funcionário. Utilizando Liquid, HTML, CSS e JavaScript. Esse e-commerce é completamente personalizado e único."
          imageUrl={imgEcoFlame}
          link="#"
        />
      </div>
    </section>
  </>
}
