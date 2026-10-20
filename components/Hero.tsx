import ChatInterface from "../src/app/chat/ChatInterface";
import InitialContent from "./initial/InitalContent";

export default function Initial({ previewChat = false }: { previewChat?: boolean }) {
  const showChat = process.env.PORTFOLIO_CHAT_ENABLED === "true"
    || (process.env.NODE_ENV === "development" && previewChat);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f8fa]">
      <div className={`relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 antialiased lg:px-8 lg:py-20 ${showChat ? "min-h-[calc(100vh-4.5rem)] lg:grid-cols-[1.08fr_.92fr]" : "min-h-[min(46rem,calc(100svh-4.5rem))]"}`}>
        <InitialContent />
        {showChat && <ChatInterface />}
      </div>
    </section>
  );
}
