import Link from "next/link";
import { getDict } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";

const copy = {
  en: {
    browse: "Browse by category",
    cats: ["Houses", "Residential Plots", "Commercial Plots", "Apartments", "Commercial Properties", "Files"],
    ctaTitle: "Not sure what you need? Talk to Ali Zia directly.",
    ctaText: "Tell us your budget and preferred society. We will suggest options that fit.",
  },
  ur: {
    browse: "قسم کے مطابق تلاش کریں",
    cats: ["گھر", "رہائشی پلاٹ", "کمرشل پلاٹ", "اپارٹمنٹس", "کمرشل پراپرٹی", "فائلیں"],
    ctaTitle: "کیا چاہیے، یقین نہیں؟ علی ضیاء سے براہِ راست بات کریں۔",
    ctaText: "اپنا بجٹ اور پسندیدہ سوسائٹی بتائیں۔ ہم آپ کے مطابق آپشن بتائیں گے۔",
  },
};

function Skyline({ className = "" }: { className?: string }) {
  const col = (x: number, n: number, fill: string, op: number) =>
    Array.from({ length: n }).map((_, i) => (
      <path key={`${x}-${i}`} d="M0 30 L60 0 L120 30 L120 44 L60 14 L0 44 Z" transform={`translate(${x} ${300 - (i + 1) * 36})`} fill={fill} fillOpacity={op} />
    ));
  return (
    <svg viewBox="0 0 420 300" className={className} aria-hidden="true">
      {col(0, 6, "#ffffff", 0.14)}
      {col(150, 8, "#B08D3C", 0.9)}
      {col(300, 4, "#ffffff", 0.14)}
    </svg>
  );
}

export default function Home() {
  const { lang, t } = getDict();
  const c = copy[lang];
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0A3A5A] to-brand text-white">
        <Skyline className="pointer-events-none absolute -bottom-6 end-0 hidden w-[520px] md:block" />
        <div className="container-x relative py-20 sm:py-28">
          <div className="mb-6 h-1 w-16 bg-gold" />
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] !text-white sm:text-7xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{t.hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/buy" className="btn btn-gold">{t.hero.browse}</Link>
            <a href={`tel:${site.phoneTel}`} className="btn border border-white/40 text-white hover:border-gold hover:text-gold">{t.hero.call}</a>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x">
          <h2 className="text-3xl font-semibold sm:text-4xl">{c.browse}</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {c.cats.map((name) => (
              <Link key={name} href="/buy" className="border-t-4 border-gold bg-white px-5 py-7 font-display text-xl font-semibold shadow-sm transition-colors hover:bg-brand hover:text-white sm:text-2xl">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold-soft py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold">{c.ctaTitle}</h2>
            <p className="mt-2 text-ink/70">{c.ctaText}</p>
          </div>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-navy">{t.cta}</a>
        </div>
      </section>
    </>
  );
}
