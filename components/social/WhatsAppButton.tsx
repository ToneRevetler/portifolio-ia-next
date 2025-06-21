import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (<a
    target="_blank"
    href="https://api.whatsapp.com/send/?phone=5519981135074&text=Vi%20seu%20portf%C3%B3lio%20e%20estou%20entrando%20em%20contato%21&type=phone_number&app_absent=0"
    className="flex text-base w-fit h-fit  items-center justify-end rounded-md gap-2 px-4 py-3 text-white bg-blue-500 hover:bg-blue-700 transition">
    Vamos Conversar
    <FaWhatsapp className="text-2xl text-white w-4" />
  </a>
  )
}
