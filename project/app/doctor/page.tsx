import React from 'react'
import Link from "next/link";
import "@/app/globals.css";

/*const page = () => {
    return (
        <div>this is doc page</div>
    )
}

export default page*/

export default function choice() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-white-600 text-white w-full h-screen">
        <div className="text-center max-w-lg p-10 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-2xl border border-white border-opacity-30">
          <h1 className="text-5xl font-extrabold mb-4">hello Doctor!</h1>
          <p className="text-lg mb-6">choose sign in or log in</p>
          <div className="flex space-x-6 justify-center">
            <Link href="/doctor/doclogin">
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
                log in
              </button>
            </Link>
            <Link href="/doctor/docsignup">
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
                sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
}