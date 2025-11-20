import AboutSection from "@/components/pages/home/about-section";
import HeroSection from "@/components/pages/home/hero-section";

const Page = () => {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <AboutSection />
    </main>
  );
};

export default Page;
