import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

interface BioLayoutProps {
  children: React.ReactNode;
}

export default function BioLayout({ children }: BioLayoutProps) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-1">{children}</main>
      <footer className="flex flex-col w-full bottom-0">
        <Footer />
      </footer>
    </>
  );
}
