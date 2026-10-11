import './InfinityScroll.css';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";


const logos = [
  { content: 'Shopify', icon: <FaShopify /> },
  { content: 'Liquid', icon: <FaCode /> },
  { content: 'JavaScript', icon: <IoLogoJavascript /> },
  { content: 'React', icon: <FaReact /> },
  { content: 'Next.js', icon: <SiNextdotjs /> },
  { content: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
  { content: 'HTML', icon: <FaHtml5 /> },
  { content: 'Node.js', icon: <FaNodeJs /> },
  { content: 'Git', icon: <FaGitAlt /> },
];

export const InfinityScroll = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-8" aria-labelledby="skills-title">
      <h2 id="skills-title" className="sr-only">Tecnologias e ferramentas</h2>
      <ul className="sr-only">
        {logos.map((item) => <li key={item.content}>{item.content}</li>)}
      </ul>
      <div className="infinite-scroll-wrapper py-2" aria-hidden="true">
        <div className="infinite-scroll-track">
          {[...logos, ...logos, ...logos].map((item, index) => (
            <div key={index} className="item rounded-full border border-slate-200 bg-slate-50 font-semibold text-slate-700">
              {item.icon}
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
