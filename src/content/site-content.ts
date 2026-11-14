import { categoriesContent } from "./categories";
import { communityContent } from "./community";
import { contactContent } from "./contact";
import { featuredCourseContent } from "./featured-course";
import { finalCtaContent } from "./final-cta";
import { footerContent } from "./footer";
import { headerContent } from "./header";
import { heroContent } from "./hero";
import { howItWorksContent } from "./how-it-works";
import { testimonialContent } from "./testimonial";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeaderContent {
  skipLink: string;
  homeLabel: string;
  primaryNavigationLabel: string;
  mobileNavigationLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  navigation: readonly NavigationItem[];
  login: string;
  loginHref: string;
  startLearning: string;
  startLearningHref: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  primaryActionHref: string;
  secondaryAction: string;
  secondaryActionHref: string;
  trust: string;
  trustSuffix: string;
  imageAlt: string;
  courseCount: string;
  courseCountSuffix: string;
  rating: string;
}

export interface CategoryItem {
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface CategoriesContent {
  eyebrow: string;
  title: string;
  description: string;
  exploreLabel: string;
  items: readonly CategoryItem[];
}

export interface FeaturedCourseContent {
  imageAlt: string;
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  instructor: string;
  instructorRole: string;
  detailsLabel: string;
  details: readonly string[];
  primaryAction: string;
  primaryActionHref: string;
  secondaryAction: string;
  secondaryActionHref: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  title: string;
  stepLabel: string;
  steps: readonly {
    number: string;
    title: string;
    description: string;
  }[];
}

export interface TestimonialContent {
  quote: string;
  author: string;
  authorRole: string;
  metrics: readonly { value: string; label: string }[];
}

export interface CommunityContent {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  actionHref: string;
}

export interface ContactFormContent {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  success: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  description: string;
  details: readonly { title: string; text: string }[];
  form: ContactFormContent;
}

export interface FinalCtaContent {
  title: string;
  description: string;
  primaryAction: string;
  primaryActionHref: string;
  secondaryAction: string;
  secondaryActionHref: string;
}

export interface FooterContent {
  brandAlt: string;
  tagline: string;
  groups: readonly {
    title: string;
    navigationLabel: string;
    links: readonly NavigationItem[];
  }[];
  copyright: string;
}

export interface SiteContent {
  header: HeaderContent;
  hero: HeroContent;
  categories: CategoriesContent;
  featuredCourse: FeaturedCourseContent;
  howItWorks: HowItWorksContent;
  testimonial: TestimonialContent;
  community: CommunityContent;
  contact: ContactContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
}

export const siteContent: SiteContent = {
  header: headerContent,
  hero: heroContent,
  categories: categoriesContent,
  featuredCourse: featuredCourseContent,
  howItWorks: howItWorksContent,
  testimonial: testimonialContent,
  community: communityContent,
  contact: contactContent,
  finalCta: finalCtaContent,
  footer: footerContent,
};
