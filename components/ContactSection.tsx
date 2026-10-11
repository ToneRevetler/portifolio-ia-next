import { Lexend } from "next/font/google";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

const links = [
  { label: "E-mail", value: "mirandatone@outlook.com", href: "mailto:mirandatone@outlook.com", icon: FiMail },
  { label: "LinkedIn", value: "Perfil profissional", href: "https://www.linkedin.com/in/tone-revetler-506163188/", icon: FiLinkedin },
  { label: "GitHub", value: "Projetos e código", href: "https://github.com/ToneRevetler", icon: FiGithub },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white px-5 py-20 sm:py-28 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-slate-200 pt-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-slate-500">Contato</p>
          <h2 className={`${titleFont.className} mt-3 text-3xl tracking-[-.035em] text-slate-950 sm:text-4xl`}>Vamos conversar.</h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600">Para conversar sobre oportunidades em desenvolvimento front-end e Shopify, entre em contato por e-mail ou pelo LinkedIn.</p>
          <button type="button" disabled aria-describedby="resume-status" className="mt-7 inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-500">
            <FiDownload aria-hidden="true" /> Currículo em PDF
          </button>
          <p id="resume-status" className="mt-2 text-xs text-slate-500">Currículo em atualização.</p>
        </div>
        <div className="divide-y divide-slate-200">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center gap-4 px-2 py-5 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
              <Icon className="shrink-0 text-lg text-slate-500" aria-hidden="true" />
              <span className="min-w-0 flex-1"><span className="block text-xs font-medium text-slate-500">{label}</span><span className="mt-1 block break-words text-sm font-semibold text-slate-900 transition group-hover:text-blue-700 sm:text-base">{value}</span></span>
              <FiArrowUpRight className="shrink-0 text-slate-400 transition group-hover:text-blue-700" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
