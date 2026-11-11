import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import type { Dict } from "@/lib/i18n";

export default function Footer({ t }: { t: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="inline-block rounded-sm bg-white p-2">
            <Image src="/logo.jpg" alt={site.name} width={96} height={96} className="h-20 w-20 object-contain" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{t.foot.about}</p>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold">{t.foot.links}</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/buy" className="hover:text-gold">{t.nav.buy}</Link></li>
            <li><Link href="/rent" className="hover:text-gold">{t.nav.rent}</Link></li>
            <li><Link href="/sell" className="hover:text-gold">{t.nav.sell}</Link></li>
            <li><Link href="/projects" className="hover:text-gold">{t.nav.projects}</Link></li>
            <li><Link href="/privacy" className="hover:text-gold">{t.foot.privacy}</Link></li>
            <li><Link href="/terms" className="hover:text-gold">{t.foot.terms}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold">{t.foot.visit}</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/80">
            <p>{site.name}</p>
            <p>{site.address}</p>
            <p><a href={`tel:${site.phoneTel}`} className="hover:text-gold" dir="ltr">{site.phoneDisplay}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        © {year} {site.name}. {t.foot.rights}
      </div>
    </footer>
  );
}
