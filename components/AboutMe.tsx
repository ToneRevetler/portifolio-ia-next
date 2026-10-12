import { Lexend } from "next/font/google";
import Image from "next/image";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

export default function AboutMe() {
  return <>
    <section id="aboutMe" className="scroll-mt-20 bg-[#f8faff] px-5 py-20 sm:py-28 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-blue-100" aria-hidden="true" />
          <Image src="/images/about/tone-revetler.jpeg" alt="Retrato de Tone Revetler" width={766} height={616} sizes="(min-width: 640px) 448px, 90vw" className="relative aspect-[4/4.4] w-full rounded-[1.75rem] object-cover object-center shadow-xl" />
          <div className="absolute -bottom-6 -right-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:right-6">
            <p className="font-black text-slate-950">Indaiatuba, SP, Brasil</p>
          </div>
        </div>
        <div>
          <p className="eyebrow text-blue-700">Sobre mim</p>
          <h2 className={`${titleFont.className} mt-3 max-w-2xl text-4xl font-bold tracking-[-0.045em] text-slate-950 sm:text-5xl`}>Sou desenvolvedor front-end e comecei minha carreira no design gráfico.</h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
            <p>Antes de trabalhar com código, meu dia a dia era criar layouts e preparar materiais gráficos. Hoje, essa experiência faz parte da maneira como trabalho com interfaces, com atenção à organização das informações e aos detalhes visuais.</p>
            <p>Atualmente, trabalho principalmente com Shopify e Liquid, no desenvolvimento e na manutenção de lojas virtuais. Também utilizo React e Next.js em outros projetos e sigo estudando integrações e testes para ampliar meus conhecimentos.</p>
          </div>
        </div>
      </div>
    </section>
  </>
}
