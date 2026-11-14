"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";
import type { ContactFormContent } from "@/content/site-content";

interface ContactFormProps {
  content: ContactFormContent;
}

export function ContactForm({ content }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form
      className="rounded-2xl border border-line bg-white p-5 shadow-sm lg:p-8"
      onInput={() => {
        if (sent) setSent(false);
      }}
      onSubmit={handleSubmit}
    >
      <h3 className="font-display text-xl font-bold leading-8">{content.title}</h3>
      <p className="mt-2 text-sm leading-6 text-copy-secondary">{content.description}</p>
      <div className="mt-6 space-y-5">
        <label className="block text-sm font-bold leading-6">
          {content.nameLabel}
          <input className="mt-2 block h-12 w-full rounded-lg border border-line bg-background px-4 font-normal placeholder:text-copy-tertiary" name="name" autoComplete="name" placeholder={content.namePlaceholder} required />
        </label>
        <label className="block text-sm font-bold leading-6">
          {content.emailLabel}
          <input className="mt-2 block h-12 w-full rounded-lg border border-line bg-background px-4 font-normal placeholder:text-copy-tertiary" name="email" type="email" autoComplete="email" inputMode="email" spellCheck={false} placeholder={content.emailPlaceholder} required />
        </label>
        <label className="block text-sm font-bold leading-6">
          {content.messageLabel}
          <textarea className="mt-2 block min-h-[100px] w-full resize-y rounded-lg border border-line bg-background px-4 py-3.5 font-normal placeholder:text-copy-tertiary" name="message" autoComplete="off" placeholder={content.messagePlaceholder} required />
        </label>
      </div>
      <button className="button-primary mt-6 w-full" type="submit">{content.submit}</button>
      <p className={sent ? "mt-3 text-sm font-medium text-primary" : "sr-only"} aria-live="polite">{sent ? content.success : ""}</p>
    </form>
  );
}
