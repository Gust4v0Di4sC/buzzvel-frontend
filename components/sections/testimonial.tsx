import Image from "next/image";

const metrics = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
] as const;

export function Testimonial() {
  return (
    <section className="section-shell bg-white">
      <div className="page-container grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-24">
        <figure>
          <Image src="/assets/quote.svg" alt="" aria-hidden="true" width={24} height={22} />
          <blockquote className="mt-4 max-w-[650px] font-display text-2xl font-bold leading-8 lg:text-[32px] lg:leading-10">
            “The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image className="rounded-full" src="/assets/alex-morgan.png" alt="Alex Morgan" width={48} height={48} />
            <span><strong className="block">Alex Morgan</strong><span className="text-sm text-copy-secondary">Product Manager</span></span>
          </figcaption>
        </figure>
        <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6">
          {metrics.map((metric) => (
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
