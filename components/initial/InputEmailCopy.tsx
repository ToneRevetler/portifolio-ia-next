'use client'
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";

export default function InputEmailCopy() {

  const setEmailValue = useState("nao foi")[1];
  const [showPopup, setShowPopup] = useState(false);


  const handleCopy = () => {
    const emailInput = document.getElementById('emailInput')?.innerText || "nao tem nada";
    const hoverTextEmail = document.getElementById('hoverTextEmail');

    setEmailValue(emailInput);

    navigator.clipboard.writeText(emailInput).then(() => {
      hoverTextEmail!.innerText = "Copiado!";
      hoverTextEmail!.classList.add("text-green-600");
      setTimeout(() => {
        hoverTextEmail!.innerText = "Copiar!";
        hoverTextEmail!.classList.remove("text-green-600");
      }, 1000);
    }).catch((err) => {
      console.error("Erro ao copiar o email:", err);
    });
  };

  const handleCopyMobile = () => {
    const emailInput = document.getElementById('emailInput')?.innerText || "nao tem nada";

    setEmailValue(emailInput);

    navigator.clipboard.writeText(emailInput).then(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
    }).catch((err) => {
      console.error("Erro ao copiar o email:", err);
    });
  }

  return <>
    <div className="cursor-pointer flex md:text-lg mt-6 w-fit items-center relative overflow-hidden ">
      <div className="p-2 border-1 border-blue-600 bg-blue-600">
        <FaRegCopy className="text-white" />
      </div>
      <div onClick={handleCopyMobile} className="px-4 rounded-r-md border-gray-400 border-1 border-l-0 min-h-full flex items-center">
        <p className="text-gray-900" id="emailInput">mirandatone@outlook.com</p>
      </div>
      <div onClick={handleCopy} className="w-full bg-gray-100 hidden sm:block opacity-0 h-full absolute rounded-r-md border-gray-400 border-1  hover:opacity-95 transition duration-300 ease-in-out">
        <div className="w-full h-full flex items-center justify-center">
          <p id="hoverTextEmail" className="text-gray-900">Copiar!</p>
        </div>
      </div>
    </div>

    {showPopup && (
      <div className="fixed bottom-4 right-0 left-0 flex justify-center">
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
      <p className=" font-semibold text-gray-600 pb-2">Me envie um email!</p>
      <h2 className="font-bold text-gray-900 text-xl ">mirandatone@outlook.com</h2>
    </div>
  </>
}