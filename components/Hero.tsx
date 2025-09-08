'use client'
import ChatInterface from "../src/app/chat/ChatInterface";
import InitialContent from "./initial/InitalContent";

export default function Initial() {
  return <>
    <section className="grid gap-4 lg:gap-0 lg:grid-cols-2 h-full py-8 container px-4 lg:p-0 mx-auto antialiased">
      <InitialContent />

      <ChatInterface />
    </section>
  </>

}