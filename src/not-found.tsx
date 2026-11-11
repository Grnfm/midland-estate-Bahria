import Link from "next/link";
import { getDict } from "@/lib/i18n";

export default function NotFound() {
  const { t } = getDict();
  return (
    <section className="container-x py-28">
      <p className="font-display text-7xl text-gold">404</p>
      <h1 className="mt-4 text-4xl font-semibold">{t.notFound.title}</h1>
      <p className="mt-3 max-w-md text-ink/70">{t.notFound.text}</p>
      <Link href="/" className="btn btn-navy mt-8">{t.notFound.back}</Link>
    </section>
  );
}
