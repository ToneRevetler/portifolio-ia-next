'use client';

import { useId, useState, type ReactNode } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

type AccordionItemProps = {
  title: string;
  subtitle: string;
  content: ReactNode;
  img?: string;
  date: string;
  defaultOpen?: boolean;
};

const AccordionItem = ({ title, content, subtitle, img, date, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={`transition-colors duration-200 ${isOpen ? "bg-slate-50/80" : "bg-white"}`}>
      <h3>
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex w-full cursor-pointer items-center gap-3 px-4 py-5 text-left transition-colors hover:bg-slate-50 focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-700 sm:gap-4 sm:px-6 sm:py-6"
        onClick={() => setIsOpen((open) => !open)}
      >
        {img ? <Image className="h-11 w-11 shrink-0 rounded-lg border border-slate-200 object-cover sm:h-12 sm:w-12" src={img} height={48} width={48} alt="" /> : <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-blue-700 sm:h-12 sm:w-12">IS</span>}
        <span className="grid min-w-0 flex-1 gap-2 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4">
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-6 text-slate-900 sm:text-base">{title}</span>
            <span className="mt-0.5 block text-sm font-normal leading-5 text-slate-500">{subtitle}</span>
          </span>
          <span className="text-xs font-normal tabular-nums text-slate-500">{date}</span>
        </span>
        <FiChevronDown aria-hidden="true" className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`} />
      </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        data-open={isOpen}
        className="experience-panel"
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-5 pb-6 text-sm leading-7 text-slate-600 sm:pl-[5.5rem] sm:pr-12 [&_ul]:list-outside [&_ul]:space-y-2 [&_ul]:pl-4 [&_li::marker]:text-slate-400">{content}</div>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 divide-y divide-slate-200">
      <AccordionItem title="Desenvolvedor Web Pleno" subtitle="Inflow Sofá" date="09/2025 - 09/2026" img="/images/experience/logos/inflow.jpeg" defaultOpen content={<ul className="list-disc space-y-2">
        <li>Reconstruí o tema da Inflow Sofá a partir de um tema-base, como único desenvolvedor, e organizei o conteúdo com metafields e metaobjetos.</li>
        <li>Desenvolvi variações de páginas e componentes e configurei testes A/B, participando das reuniões de análise com design e gestão.</li>
        <li>Implementei todo o front-end da Inflow Kids a partir dos layouts da equipe de design e UX, além de configurações técnicas de pixels, scripts e SEO.</li>
        <li>Integrei a consulta de frete por CEP na página do produto a uma API existente.</li>
        <li>Acompanhei o desempenho pelo PageSpeed Insights e validei as entregas com a equipe em homologação, com versionamento em Git antes da publicação.</li>
      </ul>} />
      <AccordionItem title="Desenvolvedor Web / Front-end" subtitle="Ecoflame Garden · Sofá na Caixa · Little Duck" date="11/2023 - 09/2025" img="/images/experience/logos/sofa.jpeg" content={<ul className="list-disc space-y-2">
        <li>Iniciei na Ecoflame Garden e, com a criação do Sofá na Caixa, passei a atuar também nessa operação. Trabalhei nas três empresas do mesmo grupo, com responsabilidades diferentes em cada loja.</li>
        <li>Participei, em equipe, do desenvolvimento e lançamento do Sofá na Caixa, implementando interfaces e funcionalidades e colaborando em reformulações, otimização de front-end e SEO.</li>
        <li>Participei da reformulação do front-end da Ecoflame Garden e realizei manutenção na loja Shopify Little Duck.</li>
        <li>Colaborei no diagnóstico de falhas de rastreamento, junto à equipe responsável pela solução.</li>
        <li>Desenvolvi o front-end e o layout de etiquetas de um sistema interno de identificação de módulos de sofá para estoque e produção, com HTML, CSS e JavaScript.</li>
      </ul>} />

      <AccordionItem
        title="Designer gráfico"
        subtitle="EBF Capacetes"
        content={
          <p>Criei layouts para capacetes e mockups 3D e preparei adesivos para produção.</p>
        }
        img="/images/experience/logos/ebf.jpeg"
        date="04/2023 - 11/2023" />
      <AccordionItem
        title="Designer Gráfico/Projetista"
        subtitle="Bureau de Comunicação" content={
          <p>Trabalhei com comunicação visual, fachadas e peças em acrílico, preparando arquivos para produção e acompanhando a aprovação com clientes.</p>
        }
        img="/images/experience/logos/bureau.jpeg"
        date="06/2022 - 04/2023" />
    </div>
  );
};

export default Accordion;
