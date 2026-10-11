'use client'
import ChatInterface from "../src/app/chat/ChatInterface";
import InitialContent from "./initial/InitalContent";

export default function Initial() {
  return <>
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f8fa]">
      <div className="relative mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-16 antialiased lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-20">
        <InitialContent />
        <ChatInterface />
      </div>
    </section>
  </>

}
