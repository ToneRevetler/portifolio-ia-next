'use client'

import ChatForm from "./ChatForm";
import { RxAvatar } from "react-icons/rx";

export default function ChatInterface() {

  return (
    <div className="md:my-12 max-w-screen">
      <h3 className="text-gray-800 text-xl md:text-center font-bold py-4 md:pb-8">Me Faça uma Pergunta Por Aqui! 😜</h3>
      <div className="w-full h-[30rem] md:h-[38rem] grid md:justify-center">
        <div className="md:max-w-full md:w-lg  flex flex-col  min-h-0 justify-between">
          <div className="p-4 rounded-t-xl w-full flex gap-2 items-center text-white bg-gradient-to-r from-[#00aed5] to-[#2130cf] ">
            <RxAvatar className="text-4xl" />
            <h2>IA Tone</h2>
          </div>

          <ChatForm />
        </div>
      </div>
    </div>
  );
}
