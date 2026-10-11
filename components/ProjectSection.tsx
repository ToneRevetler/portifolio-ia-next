import { Lexend } from "next/font/google";
import ProjectGrid, { type GridProject } from "./projects/ProjectGrid";
import ToolsShowcase from "./projects/ToolsShowcase";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

const projects: GridProject[] = [
  {
    index: "01",
    title: "Casa Sol Outdoor",
    role: "Componentes personalizados",
    category: "Shopify · Estados Unidos",
    description: "Desenvolvi componentes personalizados em Liquid para uma loja voltada ao mercado dos Estados Unidos.",
    contribution: "Desenvolvimento dos componentes e adaptação das interfaces para diferentes telas",
    challenge: "Adaptar a experiência de compra e os componentes do tema às necessidades de uma operação internacional.",
    solution: "Criação de seções personalizadas em Liquid, ajustes responsivos e refinamento das interações no front-end.",
    result: "+XX% em conversão e XX/100 em performance — dados provisórios para substituição.",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    imageUrl: "/images/project/CasaSolMockup.png",
    link: "https://casasoloutdoor.com/",
  },
  {
    index: "02",
    title: "Sofá Na Caixa",
    role: "Desenvolvimento e evolução do tema",
    category: "Shopify · Brasil",
    description: "Atuo na manutenção e no desenvolvimento do e-commerce, incluindo a construção de um tema praticamente novo para a loja.",
    contribution: "Desenvolvimento do tema, criação de componentes reutilizáveis e manutenção de diferentes lojas Shopify",
    challenge: "Evoluir uma operação Shopify ativa sem interromper a rotina comercial e editorial da equipe.",
    solution: "Construção progressiva do tema, componentes reutilizáveis e manutenção contínua das lojas.",
    result: "-XX% no tempo de publicação de novas páginas — dado provisório para substituição.",
    technologies: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
    imageUrl: "/images/project/SofaNaCaixalMockup.png",
    link: "https://sofanacaixa.com.br/",
  },
  {
    index: "03",
    title: "Eco Flame Garden",
    role: "Implementação da loja",
    category: "Shopify · Brasil",
    description: "Atuo no desenvolvimento de uma loja Shopify de produtos para áreas externas, com interface e componentes personalizados.",
    contribution: "Construção da loja, desenvolvimento de seções em Liquid e cadastro de produtos",
    challenge: "Estruturar uma nova vitrine digital para um catálogo especializado em produtos para áreas externas.",
    solution: "Implementação da loja, seções flexíveis em Liquid e organização do catálogo de produtos.",
    result: "+XX% em engajamento nas páginas de produto — dado provisório para substituição.",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    imageUrl: "/images/project/EcoFlameMockup.png",
    link: "https://www.ecoflamegarden.com.br/",
  },
];

export default function ProjectSection() {
  return <>
    <section id="project" className="scroll-mt-20 bg-white px-5 py-20 sm:py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl pb-12">
          <div>
            <p className="eyebrow text-slate-500">Projetos</p>
            <h2 className={`${titleFont.className} mt-3 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl`}>Lojas e e-commerce</h2>
          </div>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Do desenvolvimento de temas à evolução de lojas em operação. Em cada trabalho, um recorte da minha participação.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </div>
    </section>
    <ToolsShowcase />
  </>
}
