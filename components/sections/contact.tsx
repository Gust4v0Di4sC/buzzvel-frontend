import Image from "next/image";
import { ContactForm } from "./contact-form";

const contactDetails = [
  { icon: "/assets/mail.svg", title: "Email", text: "contact@luma.com" },
  { icon: "/assets/clock.svg", title: "Response Time", text: "Up to 24 hours on business days" },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-8 bg-white">
      <div className="page-container grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-4">Get in touch</h2>
          <p className="mt-4 max-w-[520px] text-base leading-[26px] text-copy-secondary lg:text-lg lg:leading-7">
            Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.
          </p>
          <ul className="mt-8 space-y-4">
            {contactDetails.map((detail) => (
              <li key={detail.title} className="flex items-center gap-4 rounded-lg bg-background p-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-light">
                  <Image src={detail.icon} alt="" aria-hidden="true" width={22} height={22} />
                </div>
                <div><p className="text-sm font-bold leading-6">{detail.title}</p><p className="text-sm leading-6 text-copy-secondary">{detail.text}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
