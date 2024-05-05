import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex mx-auto my-10 items-center justify-center">
      <div className=" text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          اوه، نه!
        </p>

        <p className="mt-4 text-gray-500">
          هیچی اینجا نیست.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          برگرد به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
