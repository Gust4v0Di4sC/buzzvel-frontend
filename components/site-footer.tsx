import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  { title: "Explore", links: ["Courses", "Categories", "Instructors", "For Teams"] },
  { title: "Company", links: ["About", "Careers", "Journal"] },
  { title: "Support", links: ["Help Center", "Contact", "Terms", "Privacy"] },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-dark pb-5 pt-[60px] text-footer-muted lg:pb-10 lg:pt-20">
      <div className="page-container">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Image src="/assets/logo-light.svg" alt="Luma" width={54} height={17} />
            <p className="mt-3 text-sm leading-6">Practical learning for curious people.</p>
          </div>
          {footerGroups.map((group, index) => (
            <nav className={index === footerGroups.length - 1 ? "col-span-2 lg:col-span-1" : undefined} key={group.title} aria-label={`${group.title} links`}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.09rem] text-footer-text">{group.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6">
                {group.links.map((label) => (
                  <li key={label}><Link className="rounded hover:text-white" href="#main-content">{label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-9 border-t border-copy-secondary pt-6 text-center text-[13px] text-white lg:mt-16 lg:text-left lg:text-footer-text">
          © 2026 Luma Learning
        </p>
      </div>
    </footer>
  );
}
