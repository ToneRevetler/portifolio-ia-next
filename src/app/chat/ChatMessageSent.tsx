
export default function ChatMessageSent({ message }: { message: string }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="bg-blue-500 text-white p-2 rounded-lg">
        <p>{message}</p>
      </div>
    </div>
  );
}