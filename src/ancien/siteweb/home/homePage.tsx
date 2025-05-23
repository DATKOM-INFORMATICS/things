import Header from "@/components/web/header";
import HeroSection from "./heroSection";
import IdeasSection from "./ideaHomeSection";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <IdeasSection/>
      </main>
    </>
  );
}
