'use client'

import ChatForm from "./ChatForm";
import { RxAvatar } from "react-icons/rx";

export default function ChatInterface() {

  return (
    <div className="md:my-12">
      <h3 className="text-gray-800 text-xl font-bold pb-8">Me Faça uma Por Aqui! 😜</h3>
      <div className="w-full rounded-2xl h-[38rem] grid justify-center  ">
        <div className="max-w-lg w-lg flex flex-col justify-between h-full">
          <div className="p-4 rounded-t-xl flex gap-2 items-center text-white bg-gradient-to-r from-[#00aed5] to-[#2130cf] ">
            <RxAvatar className="text-4xl" />
            <h2>IA Tone</h2>
          </div>

          <ChatForm />
        </div>
      </div>
    </div>
  );
}
