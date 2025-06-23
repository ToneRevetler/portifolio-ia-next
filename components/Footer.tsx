import { InputEmailCopyFooter } from "../components/initial/InputEmailCopy"
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";




export default function Footer() {
  return (
    <footer className="bg-gray-200  pt-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 items-center justify-items-center pb-8 gap-8 md:gap-2">
          <div className="grid gap-2 text-sm text-gray-800 antialiased md:justify-items-start md:w-full">
            <p className="flex items-center gap-1">Feito com  <span><RiNextjsFill className="text-2xl" /></span> Next Js</p>
            <p className="flex items-center gap-1">Estilizado com <span><IoLogoVercel className="text-xl" /></span> Tailwind</p>
            <p className="flex items-center gap-1">Hospedado na <span><RiTailwindCssFill className="text-2xl" /></span>  Vercel</p>
          </div>
          <InputEmailCopyFooter />
        </div>
        <div className="flex justify-center border-t-1 p-4 gap-1 border-gray-400 text-gray-800" >
          <p className="text-center">
            Copyright © 2025 <span><a className="underline" href="https://github.com/ToneRevetler">Tone Revetler.</a></span>All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}