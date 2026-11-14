"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#how-it-works" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-line bg-background">
      <a
        href="#main-content"
        className="fixed left-4 top-4 -translate-y-24 rounded-lg bg-primary px-4 py-3 font-bold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="page-container flex h-[68px] items-center justify-between lg:h-[69px]">
        <Link href="#main-content" aria-label="Luma home">
          <Image src="/assets/logo-dark.svg" alt="" width={54} height={17} priority />
        </Link>
        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm text-copy-secondary">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link className="rounded hover:text-copy" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link className="px-4 py-2.5 text-sm text-copy-secondary" href="#contact">Log in</Link>
          <Link className="button-primary min-h-11 px-5 py-2.5" href="#courses">Start learning</Link>
        </div>
        <button
          type="button"
          className="rounded-md p-1.5 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <Image src="/assets/menu.svg" alt="" width={24} height={24} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-b border-line bg-background px-5 pb-5 shadow-lg lg:hidden"
      >
        <ul className="flex flex-col gap-1">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link className="block rounded-lg px-3 py-3 text-sm font-medium" href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="button-primary mt-3 w-full" href="#courses" onClick={() => setIsOpen(false)}>
          Start learning
        </Link>
      </nav>
    </header>
  );
}
