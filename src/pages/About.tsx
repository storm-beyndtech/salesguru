import Navbar from '@/components/Navbar';
import Hero3 from '@/components/Hero3';
import LightSectionV2 from '@/components/LightSectionV2';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { aboutSteps, companySec1, testimonies, whyHero } from '@/lib/utils';
import AboutSteps from '@/components/AboutSteps';
import Testimonials from '@/components/Testimonials';
import Map from '@/components/Map';
// import LightSection from "@/components/LightSection";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero3 data={whyHero} isProduct={false} />
      <LightSectionV2 secData={companySec1} />
      <AboutSteps aboutSteps={aboutSteps} />
      <Testimonials data={testimonies} />
      <Map />

      <FAQ />
      <Footer />
    </>
  );
}
