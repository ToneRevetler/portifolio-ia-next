import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { GridProject } from '../../../../components/projects/ProjectGrid';
import ProjectCoverComparison from '../../../../components/projects/ProjectCoverComparison';
import projects from '../../../../content/projects.json';

export const metadata: Metadata = {
  title: 'Prévia das capas dos projetos',
  robots: { index: false, follow: false },
};

export default function ProjectCoverPreview() {
  if (process.env.NODE_ENV !== 'development') notFound();

  const project = projects.find(item => item.title === 'Casa Sol Outdoor');
  if (!project) notFound();

  const alternatives: GridProject[] = [
    {
      ...project,
      index: 'preview-mockup',
      category: 'Opção 1 · Mockup anterior',
      imageUrl: '/images/project/CasaSolMockup.png',
      imagePresentation: 'mockup',
      mobileImageUrl: undefined,
    },
    {
      ...project,
      index: 'preview-capture',
      category: 'Opção 2 · Captura direta',
      imageUrl: '/images/project/casa-sol-captura-previa.jpg',
      imagePresentation: 'screenshot',
    },
    {
      ...project,
      index: 'preview-devices',
      category: 'Opção 3 · Notebook e celular com telas maiores',
      imageUrl: '/images/project/casa-sol-captura-previa.jpg',
      mobileImageUrl: '/images/project/casa-sol-mobile-captura.jpg',
      imagePresentation: 'devices',
    },
  ];

  return (
    <section id="project" className="scroll-mt-20 bg-white px-5 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Prévia local · comparação de capas</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Um projeto, três opções de capa</h1>
          </div>
          <Link href="/#project" className="inline-flex min-h-11 items-center text-sm text-blue-700 underline underline-offset-4">Voltar ao portfólio</Link>
        </div>
        <p className="mb-8 max-w-3xl text-sm leading-6 text-slate-600">
          Alterne as opções para comparar no mesmo tamanho de card. As opções 2 e 3 usam capturas reais da loja atual; o mockup original é anterior. As imagens não comprovam a versão da sua entrega.
        </p>
        <ProjectCoverComparison alternatives={alternatives} />
        <Link href="/previa/lojas" className="mt-8 inline-flex min-h-11 items-center text-sm text-blue-700 underline underline-offset-4">Ver as quatro lojas com o mockup ampliado</Link>
        <p className="mt-8 text-sm text-slate-600">
          <a href="/images/project/casa-sol-captura-previa.jpg" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-blue-700 underline underline-offset-4">Ampliar captura original (nova aba)</a>
        </p>
      </div>
    </section>
  );
}
