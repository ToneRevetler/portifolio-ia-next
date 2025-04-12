export default function Footer() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Chat Application</h1>
      <nav className="space-x-4">
        <a href="/about" className="hover:text-gray-400">About</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
      </nav>
    </header>
  )
}