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
          <button key={project.index} type="button" aria-pressed={selected === index} aria-controls="project-cover-preview" onClick={() => setSelected(index)} className={`action-control action-button min-h-11 rounded-md border px-4 py-2 text-sm font-medium ${selected === index ? 'action-dark border-slate-800 bg-slate-800 text-white' : 'border-slate-200 bg-white text-slate-600'}`}>
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
