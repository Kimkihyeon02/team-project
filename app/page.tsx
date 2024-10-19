'use client'

import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Link from 'next/link'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Project</h1>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          프로젝트와 팀원 구성은 자세한 내용은 각 페이지에서 확인해보세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">도전</h2>
            <p className="text-gray-600">
              우리는 항상 새로운 도전에 맞서며, 더 나은 솔루션을 찾아갑니다.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">창의성</h2>
            <p className="text-gray-600">
              창의적인 사고를 통해 혁신적인 아이디어를 제시합니다.
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <Link
            href="/project"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            프로젝트 소개
          </Link>
          <Link
            href="/member"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
          >
            팀원 소개
          </Link>
        </div>
      </div>
    </div>
  )
}
