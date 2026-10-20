import Image from 'next/image';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import DeviceMockup from './DeviceMockup';

export type GridProject = {
  index: string;
  title: string;
  role: string;
  category: string;
  description: string;
  deliveryLabel: string;
  delivery: string;
  details: { title: string; text: string }[];
  technologies: string[];
  imageUrl?: string;
  imagePresentation?: 'mockup' | 'screenshot' | 'devices';
  mobileImageUrl?: string;
  link?: string;
  visual?: string;
  showDiagramInDetails?: boolean;
};

function ProjectVisual({ project }: { project: GridProject }) {
  if (project.imagePresentation === 'devices' && project.imageUrl && project.mobileImageUrl) {
    return <DeviceMockup title={project.title} desktopImage={project.imageUrl} mobileImage={project.mobileImageUrl} />;
  }

  if (project.imageUrl) {
    return <Image src={project.imageUrl} alt={`Interface da loja ${project.title}`} width={640} height={457} sizes="(min-width: 1280px) 584px, (min-width: 768px) 46vw, 90vw" className={`h-full w-full ${project.imagePresentation === 'screenshot' ? 'object-cover object-top' : 'object-contain'}`} />;
  }

  return <ProjectDiagram visual={project.visual} />;
}

function ProjectDiagram({ visual }: { visual?: string }) {
  return (
    <figure className="flex min-h-64 flex-col justify-center gap-3 rounded-lg bg-slate-50 p-5 sm:min-h-72 sm:p-7">
      <figcaption className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {visual === 'content' ? 'Esquema explicativo · estrutura de conteúdo' : 'Esquema explicativo · implementação'}
      </figcaption>
      {visual === 'content' ? <>
        <div className="rounded-md border border-dashed border-slate-300 bg-white p-3 text-sm text-slate-600">Vários templates conforme o produto e suas informações</div>
        <span aria-hidden="true" className="text-center text-blue-700">↓</span>
        <div className="rounded-md border border-blue-200 bg-white p-3 text-sm"><strong className="block text-slate-900">Um template principal de produto</strong><span className="mt-1 block text-slate-600">Conteúdo dinâmico com metafields e metaobjetos</span></div>
        <p className="text-xs leading-5 text-slate-500">Também consolidei um template principal de coleção, mantendo as exceções necessárias.</p>
      </> : <>
        <div className="rounded-md border border-slate-200 bg-white p-3 text-sm"><strong className="block text-slate-900">Layouts no Figma</strong><span className="block text-slate-600">Produzidos por design e UX</span></div>
        <div className="rounded-md border border-slate-200 bg-white p-3 text-sm"><strong className="block text-slate-900">Front-end do tema Shopify</strong><span className="block text-slate-600">Implementação integral sob minha responsabilidade</span></div>
        <p className="text-xs leading-5 text-slate-500">Configurações técnicas de pixels, scripts e SEO.</p>
      </>}
    </figure>
  );
}

export default function ProjectGrid({ projects, singleColumn = false }: { projects: GridProject[]; singleColumn?: boolean }) {
  return (
    <div className={`grid items-start gap-x-10 gap-y-14 lg:gap-x-14 ${singleColumn ? '' : 'md:grid-cols-2'}`}>
      {projects.map((project) => (
        <article key={project.index} aria-labelledby={`project-title-${project.index}`} className="min-w-0">
          <div className={`overflow-hidden rounded-lg border border-slate-200 bg-white ${project.imageUrl ? 'aspect-[1.6/1]' : ''} ${project.imagePresentation === 'screenshot' || project.imagePresentation === 'devices' ? '' : 'p-4 sm:p-6'}`}>
            <ProjectVisual project={project} />
          </div>
          <p className="mt-5 text-xs font-medium text-slate-500">{project.category}</p>
          <h3 id={`project-title-${project.index}`} className="mt-2 text-2xl font-bold tracking-tight text-slate-950">{project.title}</h3>
          <p className="mt-2 text-sm font-semibold text-slate-800">{project.role}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{project.description}</p>
          <dl className="mt-4 text-sm leading-6">
            <dt className="font-semibold text-slate-900">{project.deliveryLabel}</dt>
            <dd className="mt-1 text-slate-600">{project.delivery}</dd>
          </dl>
          <p className="mt-4 text-xs leading-6 text-slate-500"><span className="sr-only">Tecnologias: </span>{project.technologies.join(' · ')}</p>
          <details className="group mt-5 border-y border-slate-200">
            <summary className="action-control action-row flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
              <span>Detalhes da minha participação<span className="sr-only"> em {project.title}</span></span>
              <FiPlus aria-hidden="true" className="shrink-0 text-slate-500 transition group-open:rotate-45 motion-reduce:transition-none" />
            </summary>
            {project.showDiagramInDetails && project.visual && <div className="pb-5"><ProjectDiagram visual={project.visual} /></div>}
            <dl className="space-y-4 pb-5 text-sm leading-6">
              {project.details.map((detail) => (
                <div key={detail.title}><dt className="font-semibold text-slate-900">{detail.title}</dt><dd className="mt-1 text-slate-600">{detail.text}</dd></div>
              ))}
            </dl>
          </details>
          {project.link && <div className="mt-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visitar a loja ${project.title} (abre em nova aba)`} className="action-control action-link inline-flex min-h-11 items-center gap-2 text-sm text-slate-600 underline decoration-slate-300 underline-offset-4">Visitar loja atual <FiArrowUpRight className="action-arrow" aria-hidden="true" /></a>
            <p className="text-xs leading-5 text-slate-500">A loja pode ter recebido alterações após minha participação.</p>
          </div>}
        </article>
      ))}
    </div>
  );
}
