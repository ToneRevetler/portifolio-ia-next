import { InputEmailCopyFooter } from "../components/initial/InputEmailCopy" 

export default function Footer() {
  return (
    <footer className="bg-gray-200 mt-12 pt-12">
      <div className="container mx-auto">
      <InputEmailCopyFooter />
      <div className="flex justify-center gap-4 border-t-1 p-8 border-gray-400" >
        <a href="#" className="border-1 border-blue-600 text-blue-600 rounded-full px-4 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">GitHub</a>
        <a href="#" className="border-1 border-blue-600 text-blue-600 rounded-full px-4 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">Linkedin</a>
      </div>
      </div>
    </footer>
  )
}