import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="mt-5 text-xl">
        Food Not Found
      </p>

      <Link
        href="/"
        className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-xl"
      >
        Back Home
      </Link>

    </main>
  );
}