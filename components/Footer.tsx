import { InputEmailCopyFooter } from "../components/initial/InputEmailCopy" 

export default function Footer() {
  return (
    <footer className="container mx-auto pt-12">
      <InputEmailCopyFooter />
      <div className="flex justify-center gap-4 border-t-1 p-8 border-gray-200" >
        <a href="#" className="border-1 border-blue-600 text-blue-600 rounded-full px-2 ">GitHub</a>
        <a href="#" className="border-1 border-blue-600 text-blue-600 rounded-full px-2 ">Linkedin</a>
      </div>
    </footer>
  )
}