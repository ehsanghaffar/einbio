import ServerError, { UserInputPayload } from "@/types/types";
import { type ClassValue, clsx } from "clsx"
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function errorHandler(err: unknown) {
  if (err instanceof ServerError) {
    return NextResponse.json(
      {
        message: err.message,
      },
      { status: err.status }
    );
  }
  if (err instanceof Error) {
    return NextResponse.json(
      {
        message: err.message ?? "Internal server error",
      },
      { status: err.message === "jwt expired" ? 401 : 500 }
    );
  }
}

export const createUserMessage = (input: UserInputPayload) => {
  let userVibe = ""
  if (input.vibe === "حرفه‌ای") {
    userVibe = "Advanced"
  } else if (input.vibe === "طنز") {
    userVibe = "Joke"
  } else if (input.vibe === "معمولی") {
    userVibe = "Normal"
  }
  const messages = `Generate 2 ${userVibe} bios.base them on this context: ${input.bio}${input.bio.slice(-1) === "." ? "" : " "}`;

  return messages
}
