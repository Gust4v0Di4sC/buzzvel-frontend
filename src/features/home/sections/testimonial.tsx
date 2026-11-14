import Image from "next/image";
import type { TestimonialContent } from "@/content/site-content";

interface TestimonialProps {
  content: TestimonialContent;
}

export function Testimonial({ content }: TestimonialProps) {
  return (
    <section className="section-shell bg-white">
      <div className="page-container grid gap-12 lg:min-h-[325px] lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-24">
        <figure>
          <Image src="/images/quote.svg" alt="" aria-hidden="true" width={24} height={22} />
          <blockquote className="mt-4 max-w-[650px] font-display text-2xl font-bold leading-8 lg:text-[32px] lg:leading-10">
            {content.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image className="rounded-full" src="/images/alex-morgan.webp" alt={content.author} width={48} height={48} />
            <span><strong className="block">{content.author}</strong><span className="text-sm text-copy-secondary">{content.authorRole}</span></span>
          </figcaption>
        </figure>
        <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6">
          {content.metrics.map((metric) => (
            <div key={metric.value} className="border-l-2 border-primary pl-3 lg:pl-5">
              <dt className="font-display text-3xl font-extrabold text-primary lg:text-[40px] lg:leading-[44px]">{metric.value}</dt>
              <dd className="mt-1 text-xs leading-5 text-copy-secondary lg:text-sm">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
