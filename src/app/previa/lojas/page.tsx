import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectGrid, { type GridProject } from '../../../../components/projects/ProjectGrid';
import projects from '../../../../content/projects.json';

export const metadata: Metadata = {
  title: 'Prévia das quatro lojas',
  robots: { index: false, follow: false },
};

export default function StoresPreview() {
  if (process.env.NODE_ENV !== 'development') notFound();

  const previewProjects: GridProject[] = projects.map(project => ({
    ...project,
    imagePresentation: project.mobileImageUrl ? 'devices' : 'mockup',
  }));

  return (
    <section id="project" className="scroll-mt-20 bg-white px-5 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Prévia local · novas capas</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">As quatro lojas</h1>
          </div>
          <Link href="/previa/projetos" className="inline-flex min-h-11 items-center text-sm text-blue-700 underline underline-offset-4">Comparar os três formatos</Link>
        </div>
        <p className="mb-10 max-w-3xl text-sm leading-6 text-slate-600">
          Home da Inflow Sofá e da Sofá na Caixa; página de produto da Inflow Kids e da Casa Sol.
          Capturas das lojas atuais, não registros históricos da entrega. Esta versão já foi aplicada à página principal local, sem publicação.
        </p>
        <ProjectGrid projects={previewProjects} />
        <Link href="/#project" className="mt-10 inline-flex min-h-11 items-center text-sm text-blue-700 underline underline-offset-4">Voltar ao portfólio</Link>
      </div>
    </section>
  );
}
