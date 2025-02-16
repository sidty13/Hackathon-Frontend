import Link from "next/link";

import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  )
}



export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white w-full h-screen">
      <div className="text-center max-w-lg p-10 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-2xl border border-white border-opacity-30">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg mb-6">Join us to access personalized insights and a seamless experience.</p>
        <div className="flex space-x-6 justify-center">
          <Link href="/login">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition transform hover:scale-105">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}