'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
  const [loading, setLoading] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border-[12px] border-gray-300 shadow-lg"></div>

        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: `conic-gradient(#00bfff ${
              loading * 3.6
            }deg, transparent 0deg)`,
            borderRadius: '50%',
            mask: 'radial-gradient(farthest-side, transparent 96%, white 4%)',
            boxShadow: '0 0 20px #00bfff, 0 0 40px #00bfff, 0 0 60px #00bfff',
          }}
        ></div>

        <div
          className="absolute text-6xl font-bold text-[#00bfff]"
          style={{ textShadow: '0 0 20px #00bfff, 0 0 40px #00bfff' }}
        >
          {isComplete ? 'COMPLETE' : loading}
        </div>
      </div>
    </div>
  )
}
