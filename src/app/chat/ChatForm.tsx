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

    <div className="h-full border-r-1 border-l-1 border-gray-200 flex flex-col justify-end gap-4 items-end p-4">
      {messages.map((msg, index) => (
        <div key={index}
          className={`flex w-full mb-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`flex px-4 py-2 rounded-lg  text-white ${msg.from === 'user' ? 'bg-blue-500 rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}
          >
            <p>{msg.text}</p>
          </div>
        </div>
      ))}
    </div>

    <form onSubmit={handleSendMessage} className="border-1 border-gray-200  flex justify-between rounded-b-2xl items-center gap-2 p-4">
      <input id="inputChat" type="text"
        placeholder="Me Pergunte!"
        className="bg-white p-2 rounded-lg grow border-1 border-gray-200 focus:outline-none focus:border-blue-500"
        onChange={(e) => setInputValue(e.target.value)} />

      <button
        className="bg-blue-700 text-white p-2 rounded-full "
        type="submit">
        <IoIosSend className="text-white text-xl" />
      </button>

    </form>
  </>
  )
}