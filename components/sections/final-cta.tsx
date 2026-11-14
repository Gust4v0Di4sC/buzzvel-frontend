import Image from "next/image";
import Link from "next/link";
import { LearnerStack } from "./hero";

const decorations = [
  { src: "/assets/cta-spark.svg", className: "left-[10%] top-[18%] size-10" },
  { src: "/assets/cta-pencil.svg", className: "left-[22%] bottom-[13%] size-12" },
  { src: "/assets/cta-book.svg", className: "right-[13%] top-[18%] size-[60px]" },
  { src: "/assets/cta-bulb.svg", className: "right-[21%] bottom-[12%] size-12" },
  { src: "/assets/cta-cube.svg", className: "left-[9%] bottom-[30%] size-8" },
] as const;

export function FinalCta() {
  return (
    <section className="section-shell relative overflow-hidden bg-yellow">
      {decorations.map((item) => (
        <Image key={item.src} className={`absolute hidden opacity-60 lg:block ${item.className}`} src={item.src} alt="" width={60} height={60} />
      ))}
      <div className="relative mx-auto flex w-full max-w-[720px] flex-col items-center px-5 text-center md:px-8">
        <LearnerStack large />
        <h2 className="mt-8 font-display text-4xl font-extrabold leading-10 tracking-[-0.9px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-1.4px]">What will you learn next?</h2>
        <p className="mt-4 text-base leading-[26px] text-copy-secondary lg:text-lg lg:leading-7">Start with one course. Build from there.</p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link className="button-primary w-full sm:w-auto" href="#courses">Explore all courses</Link>
          <Link className="button-secondary w-full sm:w-auto" href="#contact">Join Luma</Link>
        </div>
      </div>
    </section>
  );
}
