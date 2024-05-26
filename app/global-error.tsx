"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  console.error(error);

  return (
    <html>
      <body>
        <div className="container flex justify-center text-center">
        <h2>Something went wrong!</h2>
        <Button
          onClick={() => reset()}
          variant={"outline"}
        >
         Try again
        </Button>
        <Button
          variant={"default"}
          onClick={() => router.push("/")}>
            Go home
        </Button>
        </div>
      </body>
    </html>
  );
}
