import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import type { FeaturedCourseContent } from "@/content/site-content";

interface FeaturedCourseProps {
  content: FeaturedCourseContent;
}

export function FeaturedCourse({ content }: FeaturedCourseProps) {
  return (
    <section id="featured-course" className="section-shell scroll-mt-8 bg-primary text-white">
      <div className="page-container grid items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
        <div className="relative mx-auto w-full max-w-[538px]">
          <div className="relative aspect-[538/408] overflow-hidden rounded-lg">
            <Image
              className="object-cover"
              src="/images/featured-course.webp"
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1023px) calc(100vw - 40px), 538px"
            />
          </div>
          <p className="absolute -left-2 -top-3 -rotate-2 rounded bg-yellow-strong px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.09rem] text-copy lg:-left-3">
            {content.badge}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.09rem] text-yellow-strong">{content.eyebrow}</p>
          <h2 className="section-title mt-4 text-white">{content.title}</h2>
          <p className="mt-5 text-base leading-[26px] text-white/90 lg:text-lg lg:leading-7">
            {content.description}
          </p>
          <p className="mt-6 text-lg leading-7"><strong>{content.instructor}</strong> · {content.instructorRole}</p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm" aria-label={content.detailsLabel}>
            {content.details.map((detail) => (
              <li key={detail} className="rounded-full bg-white/10 px-4 py-2">{detail}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-row gap-3">
            <ButtonLink variant="secondary" className="border-white bg-yellow-strong" href={content.primaryActionHref}>{content.primaryAction}</ButtonLink>
            <Link className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded px-4 text-sm font-semibold text-white transition-colors hover:text-yellow-strong" href={content.secondaryActionHref}>
              {content.secondaryAction} <Image src="/images/arrow-light.svg" alt="" aria-hidden="true" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
