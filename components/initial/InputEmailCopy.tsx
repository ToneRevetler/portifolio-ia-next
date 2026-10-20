'use client'
import { FaRegCopy } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const email = "mirandatone@outlook.com";

export default function InputEmailCopy() {

  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Erro ao copiar o e-mail:", error);
    }
  };

  return <>
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "E-mail copiado" : `Copiar e-mail ${email}`}
      className="cursor-pointer flex md:text-lg mt-6 w-fit items-stretch relative overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="p-2 border-1 border-blue-600 bg-blue-600 flex items-center" aria-hidden="true">
        <FaRegCopy className="text-white" />
      </span>
      <span className="px-4 rounded-r-md border-gray-400 border-1 border-l-0 min-h-full flex items-center text-gray-900">
        {email}
      </span>
      <span className={`w-full bg-gray-100 hidden sm:flex h-full absolute rounded-r-md border-gray-400 border-1 items-center justify-center transition duration-300 ease-in-out ${copied ? "opacity-95 text-green-700" : "opacity-0 hover:opacity-95 text-gray-900"}`} aria-hidden="true">
        {copied ? "Copiado!" : "Copiar!"}
      </span>
    </button>

    <p className="sr-only" role="status" aria-live="polite">
      {copied ? "E-mail copiado para a área de transferência." : ""}
    </p>

    {copied && (
      <div className="fixed bottom-4 right-0 left-0 flex justify-center sm:hidden" aria-hidden="true">
        <p className="text-center p-4 bg-gray-200 w-fit text-gray-900 rounded-md shadow-xl">
          Copiado!
        </p>
      </div>
    )}

  </>
}

export function InputEmailCopyFooter() {
  return <>
    <div className="flex items-center flex-col md:pb-8">
      <p className="pb-2 font-semibold text-gray-600">Entre em contato por e-mail</p>
      <a className="action-control action-link font-bold text-gray-900 text-xl underline decoration-white/30 underline-offset-4" href={`mailto:${email}`}>{email}</a>
    </div>
  </>
}
