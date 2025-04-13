import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function SocialMedia() {
  return <>
    <div className="flex gap-4 pt-6 text-2xl text-blue-500 ">
      <a href="#">
        <FaLinkedin />
      </a>
      <a href="#">
        <FaGithub />
      </a>
    </div>
  </>

}
