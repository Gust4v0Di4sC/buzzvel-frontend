import Image from "next/image";
import type { ContactContent } from "@/content/site-content";
import { ContactForm } from "./contact-form";

const contactIcons = ["/images/mail.svg", "/images/clock.svg"] as const;

interface ContactProps {
  content: ContactContent;
}

export function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="section-shell scroll-mt-8 bg-white">
      <div className="page-container grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-4">{content.title}</h2>
          <p className="mt-4 max-w-[520px] text-base leading-[26px] text-copy-secondary lg:text-lg lg:leading-7">
            {content.description}
          </p>
          <ul className="mt-8 space-y-4">
            {content.details.map((detail, index) => (
              <li key={detail.title} className="flex items-center gap-4 rounded-lg bg-background p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                  <Image src={contactIcons[index]} alt="" aria-hidden="true" width={22} height={22} />
                </div>
                <div><p className="text-sm font-bold leading-6">{detail.title}</p><p className="text-sm leading-6 text-copy-secondary">{detail.text}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm content={content.form} />
      </div>
    </section>
  );
}
