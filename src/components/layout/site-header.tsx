"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { HeaderContent } from "@/content/site-content";

interface SiteHeaderProps {
  content: HeaderContent;
}

export function SiteHeader({ content }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }

    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    function handleDesktopChange(event: MediaQueryListEvent) {
      if (event.matches) setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isOpen]);

  return (
    <header className="relative z-50 border-b border-line bg-background">
      <a
        href="#main-content"
        className="fixed left-4 top-4 -translate-y-24 rounded-lg bg-primary px-4 py-3 font-bold text-white transition-transform focus:translate-y-0"
      >
        {content.skipLink}
      </a>
      <div className="page-container flex h-[68px] items-center justify-between lg:h-[69px]">
        <Link href="#main-content" aria-label={content.homeLabel}>
          <Image src="/images/logo-dark.svg" alt="" width={54} height={17} priority />
        </Link>
        <nav aria-label={content.primaryNavigationLabel} className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm text-copy-secondary">
            {content.navigation.map((item) => (
              <li key={item.label}>
                <Link className="rounded hover:text-copy" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link className="rounded px-4 py-2.5 text-sm text-copy-secondary transition-colors hover:text-copy" href={content.loginHref}>{content.login}</Link>
          <Link className="button-primary min-h-11 px-5 py-2.5" href={content.startLearningHref}>{content.startLearning}</Link>
        </div>
        <button
          type="button"
          ref={menuButtonRef}
          className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-md transition-colors hover:bg-primary-light lg:hidden"
          aria-label={isOpen ? content.closeMenuLabel : content.openMenuLabel}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <Image src="/images/menu.svg" alt="" aria-hidden="true" width={24} height={24} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label={content.mobileNavigationLabel}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-b border-line bg-background px-5 pb-5 shadow-lg lg:hidden"
      >
        <ul className="flex flex-col gap-1">
          {content.navigation.map((item) => (
            <li key={item.label}>
              <Link className="block rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-primary-light" href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="button-primary mt-3 w-full" href={content.startLearningHref} onClick={() => setIsOpen(false)}>
          {content.startLearning}
        </Link>
      </nav>
    </header>
  );
}
