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
          <p>Eu sou o Tone e atualmente moro em Indaiatuba. Trabalho como Designer Gráfico em uma empresa há mais de 1 ano e por conta própria há mais de 3. Agora estou direcionando minha carreira para o mundo da programação. Me apaixonei pela programação há quase 1 ano e desde então estou cursando Engenharia de Software e estudando diversas tecnologias, como JavaScript, HTML, CSS, WordPress. Você pode me encontrar no GitHub ou no LinkedIn. Atualmente, estou expandindo minhas habilidades com UX design e Bootstrap</p>
          < SocialMedia />
        </div>
        <div>
          <Image src="/images/about/me.png" alt="foto minha" width={500} height={192} className="w-full object-cover object-center rounded-md" />
        </div>
      </div>
    </section>
  </>
}