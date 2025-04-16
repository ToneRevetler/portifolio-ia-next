import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function SocialMedia() {
  return <>
    <div className="flex gap-4 pt-6 text-2xl text-blue-600 ">
      <a href="https://www.linkedin.com/in/tone-revetler-506163188/"
        target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/ToneRevetler"
        target="_blank">
        <FaGithub />
      </a>
    </div>
  </>

}
