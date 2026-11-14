import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import type { FinalCtaContent } from "@/content/site-content";
import { LearnerStack } from "./hero";

const decorations = [
  { src: "/images/cta-spark.svg", className: "left-[10%] top-[18%] size-10" },
  { src: "/images/cta-pencil.svg", className: "left-[22%] bottom-[13%] size-12" },
  { src: "/images/cta-book.svg", className: "right-[13%] top-[18%] size-[60px]" },
  { src: "/images/cta-bulb.svg", className: "right-[21%] bottom-[12%] size-12" },
  { src: "/images/cta-cube.svg", className: "left-[9%] bottom-[30%] size-8" },
] as const;

interface FinalCtaProps {
  content: FinalCtaContent;
}

export function FinalCta({ content }: FinalCtaProps) {
  return (
    <section className="section-shell relative overflow-hidden bg-yellow">
      {decorations.map((item) => (
        <Image key={item.src} className={`absolute hidden opacity-60 lg:block ${item.className}`} src={item.src} alt="" aria-hidden="true" width={60} height={60} />
      ))}
      <div className="relative mx-auto flex w-full max-w-[720px] flex-col items-center px-5 text-center md:px-8">
        <LearnerStack large />
        <h2 className="mt-8 font-display text-4xl font-extrabold leading-10 tracking-[-0.9px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-1.4px]">{content.title}</h2>
        <p className="mt-4 text-base leading-[26px] text-copy-secondary lg:text-lg lg:leading-7">{content.description}</p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <ButtonLink className="w-full sm:w-auto" href={content.primaryActionHref}>{content.primaryAction}</ButtonLink>
          <ButtonLink variant="secondary" className="w-full sm:w-auto" href={content.secondaryActionHref}>{content.secondaryAction}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
