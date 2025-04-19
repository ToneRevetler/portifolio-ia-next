import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (<a
    href="#"
    className="flex text-base w-fit h-fit  items-center justify-end rounded-md gap-4 px-6 py-4 text-white bg-blue-500 hover:bg-blue-700 transition">
    Vamos Conversar
    <FaWhatsapp className="text-2xl text-white" />
  </a>
  )
}
