import ServerError from "@/types/types";
import { type ClassValue, clsx } from "clsx"
import { NextRequest, NextResponse } from "next/server";
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



export function getIP(req: NextRequest) {
  let ip = req.ip ?? req.headers.get("x-real-ip");
  const forwardedFor = req.headers.get("x-forwarded-for");

  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "";
  }

  return ip;
}

