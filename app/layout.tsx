import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "در کسری از ثانیه، بایویی خیره‌کننده و جذاب بساز!",
  description:
    "اینجا می‌تونی با چند کلیک ساده، بایویی شخصی‌سازی شده و جذاب که نمایانگر واقعی شخصیت توه، بسازی.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "در کسری از ثانیه، بایویی خیره‌کننده و جذاب بساز!",
    description:
      "اینجا می‌تونی با چند کلیک ساده، بایویی شخصی‌سازی شده و جذاب که نمایانگر واقعی شخصیت توه، بسازی.",
    images: [
      {
        url: "https://bio.eindev.ir/screenshot.png",
        width: "300",
        height: "300",
        alt: "با استفاده از جدیدترین فناوری هوش مصنوعی، ما به شما کمک می‌کنیم تا بایویی ایجاد کنید که همه را مجذوب خود کند.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className=" overflow-hidden">
        {children}
        <Toaster richColors />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
