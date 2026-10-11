import { InputEmailCopyFooter } from "../components/initial/InputEmailCopy"
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";




export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 px-5 pt-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 pb-12 md:grid-cols-2">
          <div>
            <p className="text-2xl font-black tracking-tight">Tone Revetler</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">Desenvolvedor front-end especializado em Shopify e Liquid, com foco em lojas virtuais personalizadas.</p>
            <div className="mt-5 grid gap-2 text-xs text-slate-500 antialiased sm:grid-cols-3">
            <p className="flex items-center gap-1">Desenvolvido com <span><RiNextjsFill className="text-2xl" /></span> Next.js</p>
            <p className="flex items-center gap-1">Interface com <span><RiTailwindCssFill className="text-xl" /></span> Tailwind CSS</p>
            <p className="flex items-center gap-1">Hospedado na <span><IoLogoVercel className="text-2xl" /></span>  Vercel</p>
            </div>
          </div>
          <div className="md:justify-self-end [&_p]:text-slate-400 [&_a]:text-white">
            <InputEmailCopyFooter />
          </div>
        </div>
        <div className="flex justify-center border-t border-white/10 p-5 text-sm text-slate-500" >
          <p className="text-center">
            © {currentYear} <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href="https://github.com/ToneRevetler">Tone Revetler.</a> Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
