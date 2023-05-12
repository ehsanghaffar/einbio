import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-3 border-b-2 pb-5 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/writingIcon.png"
          className="sm:w-12 sm:h-12 w-8 h-8 mx-1"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          جی‌پی‌تی‌ بایو
        </h1>
      </Link>
      <a href="#" target="_blank" rel="noreferrer">
        <Image
          alt="ClubGPT icon"
          src="/ChatGPT4-ClubGPT.png"
          className="sm:w-10 sm:h-[30px] w-10 h-[30px]"
          width={200}
          height={100}
        />
      </a>
    </header>
  );
}
