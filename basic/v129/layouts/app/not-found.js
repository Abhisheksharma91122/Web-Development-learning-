import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl mt-4 text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-500">Sorry, the page you're looking for doesn't exist.</p>
        <Link href="/" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go Home
        </Link>
      </div>
    </div>
  )
}