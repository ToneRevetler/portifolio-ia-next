'use client';

import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { useState, type KeyboardEvent } from 'react';

export interface Project {
  index: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const selectProject = (index: number) => {
    const nextIndex = (index + projects.length) % projects.length;
    setActiveIndex(nextIndex);
    requestAnimationFrame(() => document.getElementById(`project-tab-${nextIndex}`)?.focus());
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      selectProject(index + 1);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      selectProject(index - 1);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      selectProject(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      selectProject(projects.length - 1);
    }
  };

  return (
    <div className="mx-auto max-w-7xl border-y border-slate-300 lg:grid lg:grid-cols-[minmax(17rem,.36fr)_minmax(0,.64fr)]">
      <div className="border-b border-slate-300 lg:border-b-0 lg:border-r">
        <div
          role="tablist"
          aria-label="Selecionar projeto"
          className="project-tabs flex snap-x overflow-x-auto lg:max-h-[44rem] lg:block lg:overflow-y-auto"
        >
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={project.title}
                id={`project-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="selected-project-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`min-w-[16rem] snap-start border-r border-slate-200 px-5 py-5 text-left transition last:border-r-0 lg:block lg:w-full lg:min-w-0 lg:border-b lg:border-r-0 lg:px-6 lg:py-6 lg:last:border-b-0 ${
                  isActive
                    ? 'bg-slate-950 text-white'
                    : 'bg-white text-slate-950 hover:bg-slate-50'
                }`}
              >
                <span className={`text-xs font-bold ${isActive ? 'text-blue-300' : 'text-blue-700'}`}>{project.index}</span>
                <span className="mt-2 block text-lg font-bold">{project.title}</span>
                <span className={`mt-1 block text-xs leading-5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{project.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      <article
        id="selected-project-panel"
        role="tabpanel"
        aria-labelledby={`project-tab-${activeIndex}`}
        className="min-w-0 p-5 sm:p-8 lg:p-10"
      >
        <div className="border border-slate-200 bg-slate-100 p-3 sm:p-5">
          <Image
            key={activeProject.imageUrl}
            src={activeProject.imageUrl}
            alt={`Visualização do projeto ${activeProject.title}`}
            width={640}
            height={457}
            className="aspect-[1.4/1] w-full object-cover object-center"
          />
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
          <span>{activeProject.index}</span>
          <span>{activeProject.category}</span>
        </div>
        <h3 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl">{activeProject.title}</h3>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{activeProject.description}</p>
        <dl className="mt-6 grid gap-6 border-y border-slate-200 py-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-bold text-slate-950">Minha atuação</dt>
            <dd className="mt-2 leading-6 text-slate-600">{activeProject.contribution}</dd>
          </div>
          <div>
            <dt className="font-bold text-slate-950">Tecnologias</dt>
            <dd className="mt-2 leading-6 text-slate-600">{activeProject.technologies.join(' · ')}</dd>
          </div>
        </dl>
        <details className="group mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <summary className="cursor-pointer list-none text-sm font-bold text-slate-950 marker:hidden">Ver detalhes do case <span aria-hidden="true" className="ml-1 inline-block transition group-open:rotate-45">+</span></summary>
          <dl className="mt-5 grid gap-5 text-sm md:grid-cols-3">
            <div><dt className="font-bold text-slate-950">Desafio</dt><dd className="mt-2 leading-6 text-slate-600">{activeProject.challenge}</dd></div>
            <div><dt className="font-bold text-slate-950">Solução</dt><dd className="mt-2 leading-6 text-slate-600">{activeProject.solution}</dd></div>
            <div><dt className="font-bold text-slate-950">Impacto</dt><dd className="mt-2 leading-6 text-slate-600">{activeProject.result}</dd></div>
          </dl>
        </details>
        <a href={activeProject.link} target="_blank" rel="noopener noreferrer" aria-label={`Visitar projeto ${activeProject.title}`} className="mt-7 inline-flex items-center gap-2 border-b border-slate-950 pb-1 text-sm font-bold text-slate-950 transition hover:border-blue-700 hover:text-blue-700">
          Visitar projeto publicado <FiArrowUpRight aria-hidden="true" />
        </a>
      </article>
    </div>
  );
}
