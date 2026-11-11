import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function Home() {
  const { t } = getDict();
  return (
    <section className="relative overflow-hidden">
      <div className="container-x py-20 sm:py-28">
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-7xl">{t.hero.title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{t.hero.sub}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/buy" className="btn btn-navy">{t.hero.browse}</Link>
          <a href={`tel:${site.phoneTel}`} className="btn btn-outline">{t.hero.call}</a>
        </div>
        <div className="mt-14 h-px w-24 bg-gold" />
      </div>
    </section>
  );
}
