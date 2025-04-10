import Link from "next/link";
import Github from "./GitHub";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="text-xs">
        <p>
          طراحی و پیاده سازی با عشق توسط{" "}
            <a
              href="https://github.com/ehsanghaffar"
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:underline transition underline-offset-2 text-orange-500"
            >
              احسان غفار
            </a>
          </p>
        </div>
      <div className="flex flex-row gap-2 items-center">
        <Link
          href="https://github.com/ehsanghaffar"
          className="group"
          aria-label="Ehsan Ghaffar On GitHub"
        >
          <Github className="size-4 fill-gray-600" />
        </Link>
      </div>
    </div>
  );
}
