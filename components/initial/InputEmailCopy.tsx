'use client'
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";

export default function InputEmailCopy() {

  const setEmailValue = useState("nao foi")[1];

  const handleCopy = () => {

    const emailInput = document.getElementById('emailInput')?.innerText || "nao tem nada";

    setEmailValue(emailInput);

    navigator.clipboard.writeText(emailInput).then(() => {
      console.log("Email copiado para a área de transferência:", emailInput);
    }).catch((err) => {
      console.error("Erro ao copiar o email:", err);
    });

  }


  return <>
    <div onClick={handleCopy} className="cursor-pointer flex md:text-lg pt-6 w-fit items-center ">
      <div className="p-2 border-1  border-blue-600 bg-blue-600">
        <FaRegCopy className="text-white" />
      </div>
      <div className="px-4 rounded-r-md border-gray-400 border-1 border-l-0 min-h-full flex items-center">
        <p className="text-gray-900" id="emailInput">mirandatone@outlook.com</p>
      </div>
    </div>
  </>
}

export function InputEmailCopyFooter() {
  return <>
    <div className="flex items-center flex-col pb-8">
      <p className=" font-semibold text-gray-600 pb-2">Me envie um email!</p>
      <h2 className="font-bold text-gray-900 md:text-2xl">mirandatone@outlook.com</h2>
    </div>
  </>
}