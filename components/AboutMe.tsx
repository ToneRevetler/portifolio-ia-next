import { Lexend } from "next/font/google";
import Image from "next/image";
import SocialMedia from "../components/social/SocialMedia";

const titleFont = Lexend({ subsets: ["latin"], weight: "700" });

export default function AboutMe() {
  return <>
    <section id="aboutMe" className="container mx-auto">
      <h2 className={`${titleFont.className} text-center my-8 md:my-16 text-gray-800 font-bold md:text-5xl text-3xl tracking-wider`}>Sobre mim</h2>
      <div className="grid px-4 md:px-0 gap-8 md:pb-8 md:flex ">
        <div className="md:w-2/3">
          <h3 className="font-semibold text-blue-700 text-xl pb-4">Quem sou eu?</h3>
          <p className="pb-2">Olá! Eu sou o Tone, desenvolvedor Front-end e atualmente moro em Indaiatuba.</p>
          <p className="">Trabalho com <strong> HTML, CSS, JavaScript</strong> e <strong>Liquid</strong> no dia a dia, criando experiências para e-commerces e sites.</p>
          <p className="">Além disso, estou expandindo minhas habilidades estudando <strong> Next.js, Tailwind</strong> e <strong> integração com APIs de Inteligência Artificial.</strong> Também venho mergulhando no universo do back-end com <strong> Node.js</strong> e testes automatizados com <strong> Jest.</strong></p>
          <p className="pb-6">Estou sempre em busca de novos desafios para evoluir como desenvolvedor. Você pode me encontrar no GitHub ou no LinkedIn. Vamos conversar?</p>
          < SocialMedia />
        </div>
        <div>
          <Image src="/images/about/me.png" alt="foto minha" width={500} height={192} className="w-full object-cover object-center rounded-md" />
        </div>
      </div>
    </section>
  </>
}