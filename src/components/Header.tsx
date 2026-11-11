"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toggleLang } from "@/app/actions";
import { whatsappLink } from "@/lib/site";
import type { Dict } from "@/lib/i18n";

const links = [
  { href: "/", key: "home" },
  { href: "/buy", key: "buy" },
  { href: "/rent", key: "rent" },
  { href: "/sell", key: "sell" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export default function Header({ t }: { t: Dict }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label="Midland Estate & Builders">
          <Image src="/logo.jpg" alt="Midland Estate & Builders" width={150} height={150} priority className="h-16 w-16 object-contain" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink/80 transition-colors hover:text-gold-dark">
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <form action={toggleLang}>
            <button type="submit" className="rounded-sm border border-line px-3 py-2 text-sm font-medium hover:border-gold">
              {t.switchTo}
            </button>
          </form>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold hidden sm:inline-flex">
            {t.cta}
          </a>
          <button
            type="button"
            className="rounded-sm border border-line px-3 py-2 text-sm font-medium lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {t.menu}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-white lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-3 text-base font-medium last:border-0">
                {t.nav[l.key]}
              </Link>
            ))}
            <a href={whatsappLink()} className="btn btn-gold my-3 sm:hidden">{t.cta}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
