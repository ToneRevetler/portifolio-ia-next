'use client';
import './InfinityScroll.css';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";


const logos = [
  { content: 'tailwind CSS', icon: <RiTailwindCssFill /> },
  { content: 'React JS', icon: <FaReact /> },
  { content: 'NextJS', icon: <SiNextdotjs /> },
  { content: 'HTML', icon: <FaHtml5 /> },
  { content: 'JavaScript', icon: <IoLogoJavascript /> },
  { content: 'Shopify', icon: <FaShopify /> },
  { content: 'NodeJS', icon: <FaNodeJs /> },
  { content: 'GIT', icon: <FaGitAlt /> },
];

export const InfinityScroll = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="infinite-scroll-wrapper">
        <div className="infinite-scroll-track border border-gray-300 py-4 ">
          {[...logos, ...logos].map((item, index) => (
            <div key={index} className="item border border-gray-300 rounded-full">
              {item.icon}
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
