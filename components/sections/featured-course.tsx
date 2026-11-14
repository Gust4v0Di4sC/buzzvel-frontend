import Image from "next/image";
import Link from "next/link";

export function FeaturedCourse() {
  return (
    <section id="featured-course" className="section-shell scroll-mt-8 bg-primary text-white">
      <div className="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-[60px]">
        <div className="relative mx-auto w-full max-w-[538px]">
          <div className="relative aspect-[538/408] overflow-hidden rounded-lg">
            <Image
              className="object-cover"
              src="/assets/featured-course.webp"
              alt="Product design course workspace with sketches, stationery and a laptop"
              fill
              sizes="(max-width: 1023px) calc(100vw - 40px), 538px"
            />
          </div>
          <p className="absolute -left-2 -top-3 -rotate-2 rounded bg-yellow-strong px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.09rem] text-copy lg:-left-3">
            Featured course
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.09rem] text-yellow-strong">Most popular this month</p>
          <h2 className="section-title mt-4 text-white">Designing products people understand.</h2>
          <p className="mt-5 text-base leading-[26px] text-white/80 lg:text-lg lg:leading-7">
            Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.
          </p>
          <p className="mt-6 text-lg leading-7"><strong>with Maya Chen</strong> · Senior Product Designer</p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm" aria-label="Course details">
            {['8 lessons', '2h 40min', 'Intermediate'].map((detail) => (
              <li key={detail} className="rounded-full bg-white/15 px-4 py-2">{detail}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="button-secondary border-white bg-yellow-strong" href="#contact">View course</Link>
            <Link className="inline-flex min-h-[52px] items-center justify-center gap-2 px-4 text-sm font-semibold text-white" href="#courses">
              Browse all courses <Image src="/assets/arrow-light.svg" alt="" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
