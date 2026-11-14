import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteContent } from "@/content/site-content";
import { Categories } from "@/features/home/sections/categories";
import { Community } from "@/features/home/sections/community";
import { Contact } from "@/features/home/sections/contact";
import { FeaturedCourse } from "@/features/home/sections/featured-course";
import { FinalCta } from "@/features/home/sections/final-cta";
import { Hero } from "@/features/home/sections/hero";
import { HowItWorks } from "@/features/home/sections/how-it-works";
import { Testimonial } from "@/features/home/sections/testimonial";

export default function Home() {
  return (
    <>
      <SiteHeader content={siteContent.header} />
      <main id="main-content">
        <Hero content={siteContent.hero} />
        <Categories content={siteContent.categories} />
        <FeaturedCourse content={siteContent.featuredCourse} />
        <HowItWorks content={siteContent.howItWorks} />
        <Testimonial content={siteContent.testimonial} />
        <Community content={siteContent.community} />
        <Contact content={siteContent.contact} />
        <FinalCta content={siteContent.finalCta} />
      </main>
      <SiteFooter content={siteContent.footer} />
    </>
  );
}
