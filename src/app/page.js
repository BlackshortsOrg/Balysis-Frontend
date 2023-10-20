import HeroSection from "@/components/HeroSection";
import ShowCase from "@/components/ShowCase";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShowCase />
      <Features />
      <Testimonial />
      <div className="h-[40vh] bg-[#000f20]">Footer</div>
    </main>
  );
}
