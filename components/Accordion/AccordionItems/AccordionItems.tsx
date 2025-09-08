import { useState, useRef, ReactNode } from "react";
import Image from "next/image";

type AccordionItemProps = {
  title: string;
  subtitle: string;
  content: ReactNode;
  img: string;
  date: string;
};

const AccordionItem = ({ title, content, subtitle, img, date }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-2 border-b border-gray-300" >
      <button
        className={`accordion w-full text-left px-2 py-4 flex justify-between  cursor-pointer ${isOpen ? "active" : ""
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-2">
          <Image className="rounded-full h-16 w-16 bg-cover" src={img} height={60} width={60} alt={title} />
          <div className="flex flex-col justify-center max-w-34 md:max-w-none">
            <h4 className="font-semibold text-gray-800 ">
              {title}
            </h4>
            <p className="text-gray-600 text-sm">
              {subtitle}
            </p>
          </div>
        </div>
        <p className="self-center text-gray-600 text-sm">
          {date}
        </p>
      </button>
      <div
        ref={panelRef}
        className="panel overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? panelRef.current?.scrollHeight + "px" : "0px",
        }}
      >
        <div className="p-4 pt-2 text-gray-600 text-sm">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div>
      <AccordionItem title="Desenvolvedor Front End" subtitle="Sofá Na Caixa"
        content={
          <ul className="list-disc list-inside space-y-1">
            <li>Criação de temas para Shopify</li>
            <li>Gestão de múltiplas lojas dentro da Shopify</li>
            <li>Cadastro de produtos</li>
            <li>Desenvolvimento de componentes personalizados</li>
            <li>Desenvolvimento de Landing Pages com Next.js</li>
          </ul>
        }
        img="/images/experience/logos/sofa.jpeg"
        date="Fev 2024 - Atual" />
      <AccordionItem
        title="Desenvolvedor Júnior"
        subtitle="Eco Flame"
        content={
          <ul className="list-disc list-inside space-y-1">
            <li>Criação de Loja para Shopify</li>
            <li>Cadastro de produtos</li>
            <li>Desenvolvimento em Liquid de componentes personalizados</li>
          </ul>
        }
        img="/images/experience/logos/eco.jpeg"
        date="Nov 2023 - Atual" />

      <AccordionItem
        title="Designer gráfico"
        subtitle="EBF Capacetes"
        content={
          <ul className="list-disc list-inside space-y-1">
            <li>Criação de layouts para capacetes</li>
            <li>Finalização de adesivos para produção</li>
            <li>Mockup 3D dos novos layouts</li>
            <li>Apresentações no Power Point em 3D</li>
          </ul>
        }
        img="/images/experience/logos/ebf.jpeg"
        date="Abr 2023 - Nov 2023" />
      <AccordionItem
        title="Designer gráfico"
        subtitle="Bureau Comunicação Visual" content={
          <ul className="list-disc list-inside space-y-1">
            <li>Fechamento de arquivos para cortes a laser, impressão e outdoor</li>
            <li>Criação de fachadas de lojas</li>
            <li>Criação de adesivos</li>
            <li>Criação de ordens de serviço</li>
            <li>Aprovação feita diretamente com o cliente</li>
            <li>Projetos de peças em acrílico</li>
          </ul>
        }
        img="/images/experience/logos/bureau.jpeg"
        date="Jun 2022 - Abr 2023" />
    </div>
  );
};

export default Accordion;
