import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="shadow-lg bg-gray-900 relative h-[100px] transition-all duration-300">
      <nav className="py-4 px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-10 mt-[0.5%]">
            <Link
              href="/project"
              className="text-gray-400 hover:bg-gray-700 hover:text-white p-2 rounded transition-all duration-300 text-xl"
            >
              Project
            </Link>
            <Link
              href="/member"
              className="text-gray-400 hover:bg-gray-700 hover:text-white p-2 rounded transition-all duration-300 text-xl"
            >
              Member
            </Link>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <div className="text-4xl font-bold text-white hover:text-gray-200 transition-all duration-300">
                <h1 className="transition-transform transform hover:scale-105">
                  Introducing Project
                </h1>
              </div>
            </Link>
          </div>

          <div className="flex space-x-10"></div>
        </div>
      </nav>
    </div>
  )
}
