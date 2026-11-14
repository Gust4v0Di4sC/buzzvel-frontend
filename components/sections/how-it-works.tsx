const steps = [
  { number: "01", title: "Choose your focus", description: "Find courses based on the skill you want to build, not endless content categories.", color: "bg-primary" },
  { number: "02", title: "Learn from experience", description: "Follow concise lessons created by professionals who use these skills.", color: "bg-orange" },
  { number: "03", title: "Put it into practice", description: "Every course includes practical exercises designed to turn knowledge into action.", color: "bg-yellow-strong" },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell scroll-mt-8 bg-background">
      <div className="page-container">
        <div className="text-center">
          <p className="eyebrow">How Luma works</p>
          <h2 className="section-title mt-4">Less browsing. More learning.</h2>
        </div>
        <ol className="steps-list relative mt-14 grid gap-12 lg:mt-20 lg:grid-cols-3 lg:gap-20">
          {steps.map((step, index) => (
            <li key={step.number} className="relative">
              <div className={`flex size-14 items-center justify-center rounded-xl ${step.color}`}>
                <span className={`size-5 ${index === 0 ? "rounded-sm border-2 border-white" : index === 1 ? "rotate-12 rounded-sm bg-white" : "rounded-full border-2 border-copy"}`} aria-hidden="true" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.09rem] text-primary">Step {step.number}</p>
              <h3 className="mt-2 font-display text-xl font-bold leading-7 lg:text-2xl lg:leading-8">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-copy-secondary lg:text-base lg:leading-7">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
