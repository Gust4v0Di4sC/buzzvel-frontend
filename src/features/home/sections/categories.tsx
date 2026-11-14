import Image from "next/image";
import Link from "next/link";
import type { CategoriesContent } from "@/content/site-content";

interface CategoriesProps {
  content: CategoriesContent;
}

export function Categories({ content }: CategoriesProps) {
  return (
    <section id="courses" className="section-shell scroll-mt-8 bg-white">
      <div className="page-container">
        <div className="max-w-[560px]">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-4">{content.title}</h2>
          <p className="mt-4 text-base leading-[26px] text-copy-secondary lg:text-lg lg:leading-7">
            {content.description}
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {content.items.map((category) => (
            <Link
              key={category.number}
              href={category.href}
              className="group flex min-h-[227px] flex-col rounded-2xl border border-line p-6 transition-[border-color,transform] hover:-translate-y-1 hover:border-primary lg:min-h-[260px] lg:p-7"
            >
              <span className="w-fit rounded-md bg-primary-light px-2 py-1 text-xs font-semibold tracking-[0.09rem] text-primary">{category.number}</span>
              <h3 className="mt-[22px] font-display text-xl font-bold leading-7 lg:text-2xl lg:leading-8">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-copy-tertiary">{category.description}</p>
              <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold">
                {content.exploreLabel} <Image className="transition-transform group-hover:translate-x-1" src="/images/arrow-dark.svg" alt="" aria-hidden="true" width={20} height={20} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
