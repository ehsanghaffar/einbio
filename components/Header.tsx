import Link from "next/link";

export default function Header() {
  return (
    <div className="mx-auto items-center space-x-2 py-1 sm:px-2">
      <Link href="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent opacity-50">
          Ein
          <span className="text-gray-500 px-2">Bio</span>
        </h1>
      </Link>
    </div>
  );
}
