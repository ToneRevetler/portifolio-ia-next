import { Lexend } from "next/font/google";
import { FiFileText, FiPlay, FiPlus } from "react-icons/fi";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

export default function ToolsShowcase() {
  return (
    <section id="tools" aria-labelledby="tools-title" className="scroll-mt-24 border-y border-slate-200 bg-slate-50/70 px-5 py-16 md:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow text-slate-500">Além das lojas</p>
          <h2 id="tools-title" className={`${titleFont.className} mt-3 text-3xl tracking-[-.035em] text-slate-950 sm:text-4xl`}>Ferramentas e aplicações</h2>
          <p className="mt-5 leading-7 text-slate-600">Projetos que exploram outras formas de usar o desenvolvimento para resolver tarefas do dia a dia.</p>
        </div>
        <article aria-labelledby="extension-title" className="mt-10 grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <figure className="min-w-0">
            <div role="img" aria-label="Exemplo ilustrativo da extensão: um vídeo é transcrito e seu conteúdo é organizado em um prompt para preparar uma aula." className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-100 px-4 py-3 text-xs text-slate-600">
                <span className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-slate-300" /><span className="h-2 w-2 rounded-full bg-slate-300" /><span className="h-2 w-2 rounded-full bg-slate-300" /></span>
                <span>Vídeo → Transcrição → Prompt</span>
              </div>
              <div className="grid sm:grid-cols-[.85fr_1.15fr]" aria-hidden="true">
                <div className="border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
                  <div className="flex aspect-video items-center justify-center rounded bg-slate-100"><FiPlay className="text-3xl text-slate-400" /></div>
                  <p className="mt-4 text-sm font-semibold text-slate-800">Introdução ao JavaScript</p>
                  <p className="mt-1 text-xs text-slate-500">Vídeo de exemplo · 12 min</p>
                  <p className="mt-6 text-xs font-semibold text-slate-700">Transcrição</p>
                  <p className="mt-3 text-xs leading-6 text-slate-500"><span className="mr-2 font-mono text-slate-400">00:42</span>Uma função reúne instruções que podem ser reutilizadas ao longo do programa…</p>
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-800"><FiFileText /> Assistente de estudo</p>
                  <p className="mt-1 text-xs text-slate-500">Conteúdo organizado para a próxima etapa</p>
                  <div className="mt-5 rounded border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-slate-800">Prompt para uma aula</p>
                    <p className="mt-3 text-xs leading-6 text-slate-600">Com base na transcrição, prepare uma aula introdutória sobre funções em JavaScript. Inclua:</p>
                    <ol className="mt-3 list-inside list-decimal space-y-2 text-xs leading-5 text-slate-600"><li>Explicação dos conceitos</li><li>Exemplos comentados</li><li>Exercícios de fixação</li></ol>
                  </div>
                  <p className="mt-4 text-xs text-slate-500">Saída: texto para usar em uma ferramenta de IA</p>
                </div>
              </div>
            </div>
            <figcaption className="mt-3 text-xs leading-5 text-slate-500">Representação ilustrativa. A interface real será adicionada depois.</figcaption>
          </figure>
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500">Extensão de navegador · Inteligência artificial</p>
            <h3 id="extension-title" className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">De um vídeo a um roteiro de estudo</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">Uma extensão que transcreve vídeos e organiza o conteúdo em um prompt para preparar uma aula com inteligência artificial.</p>
            <dl className="mt-6 space-y-4 text-sm leading-6">
              <div><dt className="font-semibold text-slate-900">O problema</dt><dd className="mt-1 text-slate-600">Reunir o conteúdo de um vídeo e transformá-lo em material de estudo exige várias etapas manuais.</dd></div>
              <div><dt className="font-semibold text-slate-900">A proposta</dt><dd className="mt-1 text-slate-600">Conectar transcrição e preparação do prompt em um único fluxo no navegador.</dd></div>
            </dl>
            <details className="group mt-6 border-y border-slate-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 [&::-webkit-details-marker]:hidden">Sobre a extensão <FiPlus aria-hidden="true" className="transition group-open:rotate-45" /></summary>
              <div className="space-y-3 pb-5 text-sm leading-6 text-slate-600"><p>Esta prévia reserva espaço para explicar minha participação, as decisões técnicas e as tecnologias utilizadas.</p><p>A demonstração real e os links do projeto serão incluídos na revisão do conteúdo.</p></div>
            </details>
            <p className="mt-4 text-xs leading-5 text-slate-500">Título e descrição provisórios para avaliação do layout.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
