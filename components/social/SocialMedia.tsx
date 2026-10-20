import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function SocialMedia() {
  return <>
    <div className="flex gap-2 text-xl text-slate-700">
      <a href="https://www.linkedin.com/in/tone-revetler-506163188/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn de Tone Revetler"
        className="action-control action-button grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white">
        <FaLinkedin aria-hidden="true" />
      </a>
      <a href="https://github.com/ToneRevetler"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub de Tone Revetler"
        className="action-control action-button grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white"
        >
        <FaGithub aria-hidden="true" />
      </a>
    </div>
  </>

}
