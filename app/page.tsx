import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl">Journal App</h1>
        <p className="text-white/70 text-xl mb-4">Best app ever.</p>
        <div>
          <Link href="/journal">
            <button className="px-3 py-2 bg-teal-600 rounded-xl">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
