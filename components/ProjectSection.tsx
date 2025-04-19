import { Lexend } from "next/font/google";
import ProjectCard from "./projects/card";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

const imgTest = "/images/project/exemplo-projeto.png"

export default function ProjectSection() {
  return <>
    <section id="project" className="bg-gray-50 py-12 p-4 scroll-smooth">
      <div className="text-center">
        <h3 className="uppercase text-blue-600 font-semibold">O que eu já fiz?</h3>
        <h2 className={`${titleFont.className} text-gray-800 pt-2 pb-4 font-bold md:text-5xl tracking-wider`}>Meus Projetos</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-8 mt-8 md:mt-16">
        <ProjectCard
          title="Sofá Na Caixa"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
          imageUrl={imgTest}
          link="#"
        />
        <ProjectCard
          title="Eco Flame Garden"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
          imageUrl={imgTest}
          link="#"
        />
        <ProjectCard
          title="Casa Sol outdoor"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
          imageUrl={imgTest}
          link="#"
        />
        <ProjectCard
          title="Ocean Pools"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
          imageUrl={imgTest}
          link="#"
        />
      </div>
    </section>
  </>
}
