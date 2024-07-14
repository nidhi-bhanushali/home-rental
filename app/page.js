import Footer from "@/components/Footer";
import FormComp from "@/components/Form";
import Hero from "@/components/HeroSection";
import PropertyList from "@/components/PropertyList";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <PropertyList />
      <FormComp />
      <Testimonials />
      <Footer />
    </div>
  );
}
