import ClientHeader from './components/ClientHeader'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {' '}
        <ClientHeader />
        <main>
          <div className="flex justify-center min-h-screen">
            <div className="max-w-7xl w-full p-4">{children}</div>
          </div>
        </main>
      </body>
    </html>
  )
}
