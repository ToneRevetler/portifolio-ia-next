'use client'

import { IoIosSend } from "react-icons/io";
import { handleSubmit } from './actions';
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ChatForm() {
  const [messages, setMessages] = useState<{
    from: 'user' | 'bot',
    text: string
  }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSendMessage(event: React.FormEvent) {
    event.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Adiciona a mensagem do usuário
    setMessages(prev => [
      ...prev,
      { from: 'user', text: inputValue }
    ]);

    // Inicia loading
    setIsLoading(true);

    try {
      const aiResponse = await handleSubmit(inputValue);

      // Adiciona resposta do bot
      setMessages(prev => [
        ...prev,
        { from: 'bot', text: aiResponse }
      ]);
    } finally {
      setIsLoading(false);
    }

    setInputValue('');
    scrollToBottom()
  }

  function scrollToBottom() {
    const chatContent = document.getElementById('chatContent');
    if (chatContent) {
      chatContent.scrollTop = chatContent.scrollHeight;
    }
  }

  return (
    <>
      <div id="chatContent" className="min-h-0 flex-1 border-r-1 border-l-1 border-gray-200 flex flex-col gap-4 items-end p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex w-full mb-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={` px-4 py-2 rounded-lg text-white ${msg.from === 'user'
                ? 'bg-blue-500 rounded-br-none'
                : 'bg-gray-700 rounded-bl-none'
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
          <div className="flex w-full mb-2 justify-start">
            <div className=" px-4 py-2 rounded-lg text-white bg-gray-700 rounded-bl-none animate-pulse">
              <p>Carregando...</p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="border-1 border-gray-200 flex justify-between rounded-b-2xl items-center gap-2 p-4">
        <input
          id="inputChat"
          type="text"
          placeholder="Me Pergunte!"
          className="bg-white p-2 rounded-lg grow border-1 border-gray-200 focus:outline-none focus:border-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
        />

        <button
          className="cursor-pointer bg-blue-700 text-white p-2 rounded-full hover:bg-blue-500 transition duration-200 ease-in-out disabled:opacity-50"
          type="submit"
          disabled={isLoading}
        >
          <IoIosSend className="text-white text-xl" />
        </button>
      </form>
    </>
  );
}
