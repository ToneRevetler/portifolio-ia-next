import Image from 'next/image';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import type { Project } from './card';

export type GridProject = Project & { role: string };

export default function ProjectGrid({ projects }: { projects: GridProject[] }) {
  return (
    <div className="grid items-start gap-x-10 gap-y-14 md:grid-cols-2 lg:gap-x-14">
      {projects.map((project) => (
        <article key={project.index} aria-labelledby={`project-title-${project.index}`} className="min-w-0">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <Image src={project.imageUrl} alt={`Interface da loja ${project.title}`} width={640} height={457} sizes="(min-width: 1280px) 584px, (min-width: 768px) 46vw, 90vw" className="aspect-[1.6/1] w-full object-contain" />
          </div>
          <p className="mt-5 text-xs font-medium text-slate-500">{project.category}</p>
          <h3 id={`project-title-${project.index}`} className="mt-2 text-2xl font-bold tracking-tight text-slate-950">{project.title}</h3>
          <p className="mt-2 text-sm font-semibold text-slate-800">{project.role}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{project.description}</p>
          <p className="mt-4 text-xs leading-6 text-slate-500"><span className="sr-only">Tecnologias: </span>{project.technologies.join(' · ')}</p>
          <details className="group mt-5 border-y border-slate-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 [&::-webkit-details-marker]:hidden">
              <span>Sobre o projeto<span className="sr-only"> {project.title}</span></span>
              <FiPlus aria-hidden="true" className="shrink-0 text-slate-500 transition group-open:rotate-45" />
            </summary>
            <dl className="space-y-4 pb-5 text-sm leading-6">
              {[["Minha participação", project.contribution], ["Contexto", project.challenge], ["Implementação", project.solution], ["Resultados a validar", project.result]].map(([label, value]) => (
                <div key={label}><dt className="font-semibold text-slate-900">{label}</dt><dd className="mt-1 text-slate-600">{value}</dd></div>
              ))}
            </dl>
          </details>
          <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visitar a loja ${project.title} (abre em nova aba)`} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">Visitar loja <FiArrowUpRight aria-hidden="true" /></a>
        </article>
      ))}
    </div>
  );
}
