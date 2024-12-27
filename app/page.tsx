import BaseHeader from "@/components/BaseHeader";
import HomeHero from "@/components/HomeHero";
import HomeFeatures from "@/components/HomeFeatures";
import HomeFooter from "@/components/HomeFooter";

export default function IndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1]">
      <BaseHeader />
      <main className="flex-1 overflow-hidden">
        <HomeHero />
        <HomeFeatures />
      </main>
        <HomeFooter />
    </div>
  );
}
