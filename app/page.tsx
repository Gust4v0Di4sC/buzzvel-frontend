import { Categories } from "@/components/sections/categories";
import { Community } from "@/components/sections/community";
import { Contact } from "@/components/sections/contact";
import { FeaturedCourse } from "@/components/sections/featured-course";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonial } from "@/components/sections/testimonial";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <Community />
        <Contact />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
