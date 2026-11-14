import type { HowItWorksContent } from "@/content/site-content";

const stepColors = ["bg-primary", "bg-orange", "bg-yellow-strong"] as const;

interface HowItWorksProps {
  content: HowItWorksContent;
}

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="section-shell scroll-mt-8 bg-background">
      <div className="page-container min-h-[881px] lg:min-h-[427px]">
        <div className="text-center">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-4">{content.title}</h2>
        </div>
        <ol className="steps-list relative mt-14 grid gap-12 lg:mt-20 lg:grid-cols-3 lg:gap-20">
          {content.steps.map((step, index) => (
            <li key={step.number} className="relative">
              <div className={`flex size-14 items-center justify-center rounded-xl ${stepColors[index]}`}>
                <span className={`size-5 ${index === 0 ? "rounded-sm border-2 border-white" : index === 1 ? "rotate-12 rounded-sm bg-white" : "rounded-full border-2 border-copy"}`} aria-hidden="true" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.09rem] text-primary">{content.stepLabel} {step.number}</p>
              <h3 className="mt-2 font-display text-xl font-bold leading-7 lg:text-2xl lg:leading-8">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-copy-secondary lg:text-base lg:leading-7">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
