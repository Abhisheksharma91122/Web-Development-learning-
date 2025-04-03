import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center p-6">
            <h2 className="text-4xl font-bold text-gray-800">404 - Not Found</h2>
            <p className="mt-2 text-lg text-gray-600">Could not find the requested resource.</p>
            <Link
                href="/"
                className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-md transition duration-300 hover:bg-blue-700"
            >
                Return Home
            </Link>
        </div>
    );
}
