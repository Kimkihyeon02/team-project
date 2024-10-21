import React from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa' // react-icons 사용

export default function Memberpage() {
  return (
    <div className="min-h-screen bg-gray-300 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <img
            src="/sihoon.jpg"
            alt="Team Member 1"
            className="w-[80%] h-auto rounded-xl mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-center">이시훈</h2>
          <p className="text-gray-600 text-center">
            레이아웃, Main 페이지 담당
          </p>

          <div className="flex justify-center mt-6 space-x-6">
            <a
              href="https://github.com/KJB000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaGithub className="text-4xl" />
            </a>
            <a
              href=" https://midterm2-eosin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaGlobe className="text-4xl" />
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <img
            src="/gihyun.jpg"
            alt="Team Member 2"
            className="w-[85%] h-auto rounded-xl mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-center">김기현</h2>
          <p className="text-gray-600 text-center">팀장, Project 페이지 담당</p>

          <div className="flex justify-center mt-6 space-x-6">
            <a
              href="https://github.com/Kimkihyeon02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaGithub className="text-4xl" />
            </a>
            <a
              href="https://portfolio-sandy-theta-24.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaGlobe className="text-4xl" />
            </a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <img
            src="/jaegweon.jpg"
            alt="Team Member 3"
            className="w-[80%] h-auto rounded-xl mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-center">천재권</h2>
          <p className="text-gray-600 text-center">
            레이아웃, Member 페이지 담당
          </p>

          <div className="flex justify-center mt-6 space-x-6">
            <a
              href="https://github.com/wornjss1002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaGithub className="text-4xl" />
            </a>
            <a
              href="https://web2-midterm-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaGlobe className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
