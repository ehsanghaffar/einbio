import Link from "next/link";
import Github from "./GitHub";

export default function Header() {
  return (
    <div className="flex justify-between items-center space-x-4 py-1 border-b sm:px-4">
      <Link href="/">
        {/* <img
          alt="ClubGPT icon"
          src="/logo.png"
          className="sm:w-36"
          width={100}
          height={60}
        /> */}
        <p className="p-2 text-xl text-orange-500/50 font-bold">
          Bio
          <span className=" text-gray-300">
            GPT
          </span>
          </p>
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
