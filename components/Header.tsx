import Image from "next/image";
import Link from "next/link";
import Github from "./GitHub";
import { GithubIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center space-x-4 pb-2 border-b-2 sm:px-4">
      <Link href="/">
        <img
          alt="ClubGPT icon"
          src="/logo.png"
          className="sm:w-36"
          width={100}
          height={60}
        />
      </Link>
      <a
        className="flex items-center gap-2 justify-center border py-1 px-2 rounded text-xs sm:text-sm text-gray-600 transition-colors hover:bg-gray-100"
        href="https://github.com/ehsanghaffar/biogpt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
        <p>سورس کد</p>
      </a>
    </div>
  );
}
