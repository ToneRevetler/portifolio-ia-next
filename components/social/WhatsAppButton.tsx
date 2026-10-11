import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (<a
    target="_blank"
    rel="noopener noreferrer"
    href="https://api.whatsapp.com/send/?phone=5519981135074&text=Vi%20seu%20portf%C3%B3lio%20e%20estou%20entrando%20em%20contato%21&type=phone_number&app_absent=0"
    className="flex h-fit w-fit items-center justify-end gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800">
    Vamos conversar
    <FaWhatsapp className="text-2xl text-white w-4" aria-hidden="true" />
  </a>
  )
}
