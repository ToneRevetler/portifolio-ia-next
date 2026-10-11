'use client'

import ChatForm from "./ChatForm";
import { FiMessageCircle, FiZap } from "react-icons/fi";

export default function ChatInterface() {

  return (
    <aside className="mx-auto w-full max-w-xl text-animation lg:justify-self-end" aria-labelledby="assistant-title">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-700 text-xl text-white">
              <FiMessageCircle aria-hidden="true" />
            </span>
            <div>
              <h2 id="assistant-title" className="font-bold text-slate-950">Assistente do portfólio</h2>
              <p className="text-xs text-slate-500">Respostas baseadas na minha experiência</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700">
            <FiZap aria-hidden="true" /> IA
          </span>
        </div>
        <div className="h-[30rem] sm:h-[32rem]">
          <ChatForm />
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">Você pode perguntar sobre Shopify, projetos ou experiência profissional.</p>
    </aside>
  );
}
