'use client'

import { IoIosSend } from "react-icons/io";
import { handleSubmit } from './actions'
import { useState } from "react";


export default function ChatForm() {

  const [messages, setMessages] = useState<{ from: 'user' | 'bot', text: string }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  async function handleSendMessage(event: React.FormEvent) {

    event.preventDefault();

    if (!inputValue.trim()) return

    const aiResponse = await handleSubmit(inputValue)

    // setMessages([...messages, inputValue]);

    setMessages(prev => [...prev, { from: 'user', text: inputValue }, { from: 'bot', text: aiResponse }]);

    const inputElement = document.getElementById('inputChat') as HTMLInputElement | null;
    if (inputElement) {
      inputElement.value = "";
    }
    setInputValue('');

  }

  return (<>

    <div className="flex flex-col gap-4 items-end p-4">
      {messages.map((msg, index) => (
        <div key={index}
          className={`flex w-full mb-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`flex rounded-lg px-4 py-2 text-white ${msg.from === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}
          >
            <p>{msg.text}</p>
          </div>
        </div>
      ))}
    </div>

    <form onSubmit={handleSendMessage} className="flex justify-center rounded-b-2xl items-center gap-4 p-4 bg-gray-400">
      <input id="inputChat" type="text"
        placeholder="me pergunte!"
        className="bg-white p-2 rounded-lg"
        onChange={(e) => setInputValue(e.target.value)} />

      <button
        className="bg-green-600 text-white p-2 rounded-lg "
        type="submit">
        <IoIosSend size={24} color="#fff" />
      </button>

    </form>
  </>
  )
}