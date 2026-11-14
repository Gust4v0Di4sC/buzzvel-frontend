import Image from "next/image";
import Link from "next/link";

const learners = ["learner-1.webp", "learner-2.webp", "learner-3.webp"] as const;

function LearnerStack({ large = false }: { large?: boolean }) {
  const size = large ? 40 : 32;
  const images = large ? [...learners, "learner-4.webp"] : learners;
  return (
    <div className="flex" aria-hidden="true">
      {images.map((image) => (
        <Image
          key={image}
          className={`rounded-full border-2 ${large ? "-ml-2 first:ml-0 border-yellow-strong" : "-ml-2 first:ml-0 border-background"}`}
          src={`/assets/${image}`}
          alt=""
          aria-hidden="true"
          width={size}
          height={size}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="section-shell overflow-hidden bg-background">
      <div className="page-container grid items-start gap-10 lg:grid-cols-[1fr_500px] lg:gap-[60px]">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Learn at your own pace</p>
          <h1 className="mt-4 max-w-[560px] font-display text-[40px] font-extrabold leading-[44px] tracking-[-1px] lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.6px]">
            Build skills that actually move you forward.
          </h1>
          <p className="mt-6 max-w-[480px] text-base leading-[26px] text-copy-secondary lg:text-lg lg:leading-7">
            Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary w-full sm:w-auto" href="#courses">Explore courses</Link>
            <Link className="button-secondary w-full sm:w-auto" href="#how-it-works">See how it works</Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
            <LearnerStack />
            <p className="text-sm leading-6"><strong>Trusted by 24,000+</strong> <span className="text-copy-secondary">learners</span></p>
          </div>
        </div>

        <div className="relative order-1 mx-auto h-[380px] w-full max-w-[500px] lg:order-2 lg:h-[520px]">
          <div className="absolute bottom-3 right-[-10px] top-6 w-[75%] rounded-2xl bg-orange lg:-right-10" />
          <div className="absolute bottom-3 -left-2 size-16 rounded-full bg-primary-light lg:-left-11 lg:size-[106px]" />
          <div className="absolute inset-y-0 left-1/2 w-[calc(100%-16px)] max-w-[500px] -translate-x-1/2 overflow-hidden rounded-2xl lg:w-full lg:rounded-3xl">
            <Image
              className="object-cover"
              src="/assets/hero-student.webp"
              alt="Student smiling while learning on a laptop"
              fill
              priority
              sizes="(max-width: 1023px) calc(100vw - 56px), 500px"
            />
          </div>
          <div className="absolute left-0 top-1.5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[var(--shadow-float)] lg:-left-[22px] lg:top-4">
            <strong className="rounded-lg bg-primary-light px-1 py-1 text-sm leading-6 text-primary">120+</strong>
            <span className="text-sm">expert-led courses</span>
          </div>
          <div className="absolute bottom-[35px] right-0 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-[var(--shadow-float)] lg:-right-14">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <Image key={index} src="/assets/star.svg" alt="" aria-hidden="true" width={14} height={14} />
              ))}
            </div>
            <span className="text-sm">4.9 avg rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { LearnerStack };
