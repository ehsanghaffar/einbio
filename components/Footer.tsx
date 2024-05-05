import { Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t pt-2 sm:py-4">
      <div className="container flex flex-row justify-between items-center">
        <div className="text-xs sm:text-sm">
        ساخته شده با{" "}
        <a
          href="https://openai.com/blog/chatgpt"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2 text-[#0BA37F]"
        >
          ChatGPT{" "}
        </a>
        و{" "}
        <a
          href="https://tailwindcss/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2 text-[#37BCF8]"
        >
          Tailwindcss{" "}
        </a>
        </div>
      <div className="items-center">
        <Link
          href="https://twitter.com/ehsanghaffar"
          className="group"
          aria-label="Ehsan Ghaffar On Twitter"
        >
        <Twitter width={16} fill="#1DA1F2" color="#1DA1F2" />
        </Link>
      </div>
      </div>
    </div>
  );
}
