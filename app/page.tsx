import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import BuiltWith from "@/components/BuiltWith";
import Installation from "@/components/Installation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <FeatureGrid />
      <HowItWorks />
      <BuiltWith />
      <Installation />
      <Footer />
    </main>
  );
}
