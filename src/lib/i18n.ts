import { cookies } from "next/headers";

export type Lang = "en" | "ur";

export const dict = {
  en: {
    nav: { home: "Home", buy: "Buy", rent: "Rent", sell: "Sell", projects: "Projects", about: "About", contact: "Contact" },
    cta: "WhatsApp Us",
    menu: "Menu",
    switchTo: "اردو",
    hero: {
      title: "Find your place in Lahore.",
      sub: "Houses, plots, apartments and commercial property across Lahore's leading societies, handled by one dealer you can call directly.",
      call: "Call now",
      browse: "Browse properties",
    },
    foot: {
      about: "Trusted property dealing in Bahria Town and across Lahore.",
      links: "Explore",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      visit: "Visit our office",
      rights: "All rights reserved.",
    },
    notFound: { title: "Page not found", text: "The page you are looking for does not exist or has moved.", back: "Back to home" },
  },
  ur: {
    nav: { home: "ہوم", buy: "خریدیں", rent: "کرائے پر", sell: "بیچیں", projects: "ہاؤسنگ پروجیکٹس", about: "ہمارے بارے میں", contact: "رابطہ" },
    cta: "واٹس ایپ کریں",
    menu: "مینو",
    switchTo: "English",
    hero: {
      title: "لاہور میں اپنا مقام تلاش کریں۔",
      sub: "لاہور کی معروف سوسائٹیوں میں گھر، پلاٹ، اپارٹمنٹ اور کمرشل پراپرٹی، ایک ایسے ڈیلر کے ساتھ جس سے آپ براہِ راست بات کر سکتے ہیں۔",
      call: "ابھی کال کریں",
      browse: "پراپرٹیز دیکھیں",
    },
    foot: {
      about: "بحریہ ٹاؤن اور لاہور بھر میں قابلِ اعتماد پراپرٹی ڈیلنگ۔",
      links: "صفحات",
      legal: "قانونی",
      privacy: "پرائیویسی پالیسی",
      terms: "شرائط و ضوابط",
      visit: "ہمارے دفتر تشریف لائیں",
      rights: "جملہ حقوق محفوظ ہیں۔",
    },
    notFound: { title: "صفحہ نہیں ملا", text: "آپ جو صفحہ تلاش کر رہے ہیں وہ موجود نہیں یا منتقل ہو چکا ہے۔", back: "ہوم پر واپس جائیں" },
  },
};

export type Dict = (typeof dict)["en"];

export function getLang(): Lang {
  return cookies().get("lang")?.value === "ur" ? "ur" : "en";
}

export function getDict(): { lang: Lang; t: Dict } {
  const lang = getLang();
  return { lang, t: dict[lang] };
}
