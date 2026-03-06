import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to WebOrbitz</h1>
        <p className="text-lg text-gray-600 mb-8">
          Next.js Application with Swagger API Documentation
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/api-docs"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            View API Docs
          </Link>
          <Link
            href="/api/hello"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Test API
          </Link>
        </div>
      </div>
    </main>
  );
}
