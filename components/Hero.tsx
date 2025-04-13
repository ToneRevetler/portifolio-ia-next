import ChatInterface from "../src/app/chat/ChatInterface";
import InitialContent from "./initial/InitalContent";

export default function Initial() {
  return <>
    <section className="grid md:grid-cols-2 h-full py-8 container mx-auto">
      <InitialContent />
      <ChatInterface />
    </section>
  </>

}