import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getDict } from "@/lib/i18n";
import { site } from "@/lib/site";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const urdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"], variable: "--font-urdu" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: `${site.name} | Property Dealer in Lahore`, template: `%s | ${site.name}` },
  description: "Buy, sell and rent houses, plots, apartments and commercial property in Bahria Town and across Lahore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { lang, t } = getDict();
  return (
    <html lang={lang} dir={lang === "ur" ? "rtl" : "ltr"} className={`${display.variable} ${body.variable} ${urdu.variable}`}>
      <body className="font-sans">
        <Header t={t} />
        <main>{children}</main>
        <Footer t={t} />
        <WhatsAppButton label={t.cta} />
      </body>
    </html>
  );
}
