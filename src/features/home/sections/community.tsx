import Image from "next/image";
import Link from "next/link";
import type { CommunityContent } from "@/content/site-content";

const photos = Array.from({ length: 10 }, (_, index) => `/images/community-${String(index + 1).padStart(2, "0")}.webp`);

interface CommunityProps {
  content: CommunityContent;
}

export function Community({ content }: CommunityProps) {
  return (
    <section id="community" className="section-shell scroll-mt-8 bg-background">
      <div className="page-container grid items-center gap-6 lg:grid-cols-2 lg:gap-[60px]">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-2">{content.title}</h2>
          <p className="mt-6 text-base leading-[26px] text-copy-secondary lg:text-lg lg:leading-7">
            {content.description}
          </p>
          <Link className="button-secondary mt-8 w-full sm:w-auto" href={content.actionHref}>{content.action}</Link>
        </div>
        <div className="relative mx-auto h-[310px] w-full max-w-[540px] lg:h-[522px]">
          <div className="absolute left-1/2 top-1/2 size-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light lg:size-[500px]" />
          <div className="absolute inset-0 grid grid-cols-4 items-center gap-2 lg:gap-4">
            {[photos.slice(0, 2), photos.slice(2, 5), photos.slice(5, 8), photos.slice(8, 10)].map((column, columnIndex) => (
              <div key={column[0]} className={`flex flex-col gap-2 lg:gap-3 ${columnIndex % 2 === 0 ? "pt-10" : "pb-8"}`}>
                {column.map((photo, imageIndex) => (
                  <div key={photo} className={`relative overflow-hidden rounded shadow-md ${imageIndex % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
                    <Image className="object-cover" src={photo} alt="" aria-hidden="true" fill sizes="(max-width: 1023px) 22vw, 130px" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
