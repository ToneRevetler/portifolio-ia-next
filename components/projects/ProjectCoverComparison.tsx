'use client';

import { useState } from 'react';
import ProjectGrid, { type GridProject } from './ProjectGrid';

const labels = ['1 · Mockup original', '2 · Captura direta', '3 · Mockup ampliado'];

export default function ProjectCoverComparison({ alternatives }: { alternatives: GridProject[] }) {
  const [selected, setSelected] = useState(2);

  return (
    <div>
      <div role="group" aria-label="Escolher apresentação da capa" className="mb-8 flex flex-wrap justify-center gap-2">
        {alternatives.map((project, index) => (
          <button key={project.index} type="button" aria-pressed={selected === index} aria-controls="project-cover-preview" onClick={() => setSelected(index)} className={`min-h-11 rounded-md border px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 ${selected === index ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'}`}>
            {labels[index]}
          </button>
        ))}
      </div>
      <div id="project-cover-preview" className="mx-auto max-w-[584px]">
        <p aria-live="polite" className="sr-only">Exibindo {labels[selected]}</p>
        <ProjectGrid projects={[alternatives[selected]]} singleColumn />
      </div>
    </div>
  );
}
