'use client'

import { IoIosSend } from "react-icons/io";
import { handleSubmit } from './actions';
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/dotsLoadingEdit.json';



export default function ChatForm() {
  const [messages, setMessages] = useState<{
    from: 'user' | 'bot',
    text: string
  }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const chatContent = document.getElementById('chatContent');
    if (chatContent) chatContent.scrollTop = chatContent.scrollHeight;
  }, [messages, isLoading]);

  async function handleSendMessage(event: React.FormEvent) {
    event.preventDefault();
    const normalizedInput = inputValue.trim();
    if (!normalizedInput || isLoading) return;

    // Adiciona a mensagem do usuário
    setMessages(prev => [
      ...prev,
      { from: 'user', text: normalizedInput }
    ]);

    setInputValue('');
    setIsLoading(true);

    try {
      const result = await handleSubmit(normalizedInput);

      setMessages(prev => [
        ...prev,
        { from: 'bot', text: result.ok ? result.text : result.error }
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div id="chatContent" role="log" aria-live="polite" aria-relevant="additions" className="flex min-h-0 flex-1 flex-col items-end gap-4 overflow-y-auto bg-slate-50/60 p-5">
        {messages.length === 0 && (
          <div className="my-auto w-full" role="note">
            <p className="max-w-sm text-lg font-bold leading-snug text-slate-900">Quer saber mais sobre a minha experiência?</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">Escolha uma pergunta ou escreva a sua.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Qual é a sua experiência com Shopify?", "Quais projetos você já desenvolveu?", "Como posso entrar em contato?"].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setInputValue(suggestion)}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-left text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex w-full mb-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${msg.from === 'user'
                ? 'bg-blue-700 text-white rounded-br-sm'
                : 'border border-slate-200 bg-white text-slate-700 rounded-bl-sm shadow-sm'
                }`}
            >
              {msg.from === 'bot' ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.text}
                </ReactMarkdown>
              ) : (
                <p>{msg.text}</p>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex w-full mb-2 justify-start" role="status" aria-label="O assistente está respondendo">
            <div className="animate-pulse rounded-2xl rounded-bl-sm bg-slate-900 px-4 py-2 text-white">
              <div>
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  style={{ width: 30, height: 30 }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="flex items-center justify-between gap-2 border-t border-slate-200 bg-white p-4">
        <label htmlFor="inputChat" className="sr-only">Pergunte ao assistente virtual</label>
        <input
          id="inputChat"
          type="text"
          placeholder="Pergunte sobre meu trabalho..."
          className="grow rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          maxLength={500}
          autoComplete="off"
        />

        <button
          className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-xl bg-blue-700 text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          disabled={isLoading}
          aria-label="Enviar pergunta"
        >

          <IoIosSend className="text-white text-xl" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
