import Header from "@/components/web/header";
import HeroSection from "./sections/hero";
import Footer from "@/components/web/footer";
import CallToActionSection from "./sections/cta";
import HowItWorksSection from "./sections/how";
import WhySection from "./sections/why";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <WhySection />
        <HowItWorksSection />
        <CallToActionSection />
        <Footer />
      </main>
    </>
  );
}
