import Image from "next/image";
import Link from "next/link";
import Github from "./GitHub";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-3 border-b-2 pb-5 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
        عین جـی پـی تـی
        </h1>
      </Link>
      <a href="https://ehsanghaffarii.ir" target="_blank" rel="noreferrer">
        <Image
          alt="ClubGPT icon"
          src="/logo.png"
          className="sm:w-10 sm:h-[30px] "
          width={200}
          height={100}
        />
      </a>
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
        href="https://github.com/ehsanghaffar/biogpt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
        <p className="px-2">سورس پروژه</p>
      </a>
    </header>
  );
}
