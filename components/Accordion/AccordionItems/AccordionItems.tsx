'use client';

import { useId, useState, type ReactNode } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

type AccordionItemProps = {
  title: string;
  subtitle: string;
  content: ReactNode;
  img: string;
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
        <Image className="h-11 w-11 shrink-0 rounded-lg border border-slate-200 object-cover sm:h-12 sm:w-12" src={img} height={48} width={48} alt="" />
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
      <AccordionItem title="Desenvolvedor front-end" subtitle="Sofá Na Caixa"
        content={
          <ul className="list-disc list-inside space-y-1">
            <li>Desenvolvimento e manutenção de temas Shopify</li>
            <li>Manutenção de múltiplas lojas Shopify</li>
            <li>Cadastro de produtos</li>
            <li>Desenvolvimento de componentes personalizados</li>
            <li>Desenvolvimento de landing pages com Next.js</li>
          </ul>
        }
        img="/images/experience/logos/sofa.jpeg"
        date="Fev 2024 — Atual"
        defaultOpen />
      <AccordionItem
        title="Desenvolvedor júnior"
        subtitle="Eco Flame"
        content={
          <ul className="list-disc list-inside space-y-1">
            <li>Criação e manutenção de loja Shopify</li>
            <li>Cadastro de produtos</li>
            <li>Desenvolvimento de componentes personalizados em Liquid</li>
          </ul>
        }
        img="/images/experience/logos/eco.jpeg"
        date="Nov 2023 — Atual" />

      <AccordionItem
        title="Designer gráfico"
        subtitle="EBF Capacetes"
        content={
          <ul className="list-disc list-inside space-y-1">
            <li>Criação de layouts para capacetes</li>
            <li>Finalização de adesivos para produção</li>
            <li>Criação de mockups 3D para novos layouts</li>
            <li>Criação de apresentações 3D em PowerPoint</li>
          </ul>
        }
        img="/images/experience/logos/ebf.jpeg"
        date="Abr — Nov 2023" />
      <AccordionItem
        title="Designer gráfico"
        subtitle="Bureau Comunicação Visual" content={
          <ul className="list-disc list-inside space-y-1">
            <li>Preparação de arquivos para corte a laser, impressão e outdoors</li>
            <li>Criação de fachadas de lojas</li>
            <li>Criação de adesivos</li>
            <li>Criação de ordens de serviço</li>
            <li>Aprovação feita diretamente com o cliente</li>
            <li>Projetos de peças em acrílico</li>
          </ul>
        }
        img="/images/experience/logos/bureau.jpeg"
        date="Jun 2022 — Abr 2023" />
    </div>
  );
};

export default Accordion;
