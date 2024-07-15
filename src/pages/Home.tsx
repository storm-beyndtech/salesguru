import AutoCount from "@/components/AutoCount";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import LightSection from "@/components/LightSection";
import Navbar from "@/components/Navbar";
import { testimonies, HomeSec1, HomeSec4, HomeSec5 } from "@/lib/utils";
import LightSectionV2 from "@/components/LightSectionV2";
import Testimonials from "@/components/Testimonials";
import DarkSection from "@/components/DarkSection";
import Process from "@/components/Process";
import Review from "@/components/Review";
import Map from "@/components/Map";

export default function Home() {
  return (
    <>
      <Navbar />  
      <Hero />
      <HowItWorksSection />
      <LightSectionV2 secData={HomeSec4}/>
      <AutoCount />
      <Process />
      <LightSection secData={HomeSec5} />
      <Features />
      <Review />
      <DarkSection />
      <LightSectionV2 secData={HomeSec1}/>
      <Testimonials data={testimonies} />
      <Map />
      <FAQ />
      <Footer />
    </>
  )
}
