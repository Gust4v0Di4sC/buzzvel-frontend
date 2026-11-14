"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form className="rounded-2xl border border-line bg-white p-5 shadow-sm lg:p-8" onSubmit={handleSubmit}>
      <h3 className="font-display text-xl font-bold leading-8">Contact us</h3>
      <p className="mt-2 text-sm leading-6 text-copy-secondary">Fill out the fields and we will get in touch.</p>
      <div className="mt-6 space-y-5">
        <label className="block text-sm font-bold leading-6">
          Full name
          <input className="mt-2 block h-12 w-full rounded-lg border border-line bg-background px-4 font-normal placeholder:text-copy-tertiary" name="name" autoComplete="name" placeholder="Your name…" required />
        </label>
        <label className="block text-sm font-bold leading-6">
          Email
          <input className="mt-2 block h-12 w-full rounded-lg border border-line bg-background px-4 font-normal placeholder:text-copy-tertiary" name="email" type="email" autoComplete="email" spellCheck={false} placeholder="youremail@example.com…" required />
        </label>
        <label className="block text-sm font-bold leading-6">
          Your question
          <textarea className="mt-2 block min-h-[100px] w-full resize-y rounded-lg border border-line bg-background px-4 py-3.5 font-normal placeholder:text-copy-tertiary" name="message" placeholder="Tell us how we can help…" required />
        </label>
      </div>
      <button className="button-primary mt-6 w-full" type="submit">Send message</button>
      <p className="mt-3 min-h-6 text-sm font-medium text-primary" aria-live="polite">{sent ? "Thanks! Your message has been received." : ""}</p>
    </form>
  );
}
