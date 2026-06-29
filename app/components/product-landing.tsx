import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { ProductShowcase } from "./product-showcase";

const phoneDisplay = "+381 69 660 654";
const phoneHref = "+38169660654";
const email = "sft.srb@gmail.com";

const languages = ["rs", "en"] as const;
type Language = (typeof languages)[number];

const alfaDimensions = [
  "4cm 6g",
  "5,5cm 10g",
  "5,5cm 15g",
  "7cm 20g",
  "7cm 30g",
  "8cm 40g",
  "9cm 50g",
  "12,5cm 100g",
  "12,5cm 140g",
];

const zedDimensions = [
  "5cm 10g",
  "6,5cm 15g",
  "6,5cm 25g",
];

const createModelImages = (model: string) =>
  Array.from({ length: 9 }, (_, index) => {
    const fileName = `${model}-${String(index + 1).padStart(2, "0")}`;

    return {
      image: `/models/${model}/optimized/${fileName}.webp`,
      thumbnail: `/models/${model}/optimized/${fileName}-thumb.webp`,
    };
  });

const alfaImages = createModelImages("model-alfa");
const zedImages = createModelImages("model-zed");

const alfaLureNames = ["SFC", "HT", "FTP", "NP", "GS", "WH", "S", "B", "RH"];
const zedLureNames = ["S", "C", "FTP", "NP", "RH", "WH", "B", "SFC", "HT"];

const copy = {
  rs: {
    languageLabel: "Jezik",
    languageName: "SRB",
    nav: {
      home: "Početna",
      models: "Modeli",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Sport Fishing Tackle",
      title: "SFT Fishing",
      accent: "Varalice",
      intro:
        "Premium ribolovne varalice izrađene sa strašću za ribolov. Za rekreativce i takmičare koji ne pristaju na kompromise.",
      primary: "Pogledaj modele",
      secondary: "Kontaktiraj nas",
      imageAlt: "Maglovito jezero u zoru",
    },
    stats: [
      { value: "100%", label: "Ručna izrada", text: "Svaka varalica pažljivo završena" },
      { value: "2", label: "Modela", text: "Alfa i Zed galerije sa stvarnim fotografijama" },
      { value: "SRB", label: "Domaći brend", text: "Sportski ribolov iz Srbije" },
    ],
    productsLabel: "Naši proizvodi",
    productsTitle: "Modeli varalica",
    productsText:
      "Modeli Alfa i Zed predstavljeni su kroz galerije stvarnih dekora, sa dostupnim dimenzijama i brzom putanjom do kontakta.",
    products: [
      {
        eyebrow: "Varalica za grabljivice",
        title: "Model Alfa",
        subtitle: "Snažna akcija i jaka vibracija",
        description:
          "Dizajnirana za ribolovce koji traže varalicu sa snažnom akcijom. Krupan rad i jaka vibracija izazivaju instinktivan napad grabljivica. Odlična je za lov soma, a zahvaljujući stabilnom radu pri različitim brzinama vođenja pruža sigurnost i pouzdanost u svim uslovima ribolova.",
        specs: [
          { label: "Dimenzije", value: alfaDimensions },
          { label: "Namena", value: "Som i druge grabljivice" },
        ],
        images: alfaImages.map((image, index) => ({
          ...image,
          alt: `Model Alfa dekor ${index + 1}`,
          name: alfaLureNames[index],
        })),
        cta: "Zatraži informacije",
      },
      {
        eyebrow: "Varalica za grabljivice",
        title: "Model Zed",
        subtitle: "Sitna visokofrekventna vibracija",
        description:
          "Namenjena za lov grabljivica. Zahvaljujući lakom ulasku u rad i sitnoj, visokofrekventnoj vibraciji, verno imitira plen i izaziva instinktivan napad grabljivica. Odlične performanse pruža u rekama pri različitim brzinama vođenja.",
        specs: [
          { label: "Dimenzije", value: zedDimensions },
          { label: "Namena", value: "Rečne grabljivice" },
        ],
        images: zedImages.map((image, index) => ({
          ...image,
          alt: `Model Zed dekor ${index + 1}`,
          name: zedLureNames[index],
        })),
        cta: "Zatraži informacije",
      },
    ],
    galleryLabels: {
      previous: "Prethodna slika",
      next: "Sledeća slika",
      showImage: "Prikaži sliku",
      openThumbnail: "Otvori thumbnail",
    },
    contact: {
      label: "Stupite u kontakt",
      title: "Kontaktirajte nas",
      text:
        "Imate pitanje o modelima, narudžbini ili saradnji? Slobodno nas kontaktirajte, odgovaramo brzo.",
      phone: "Telefon",
      email: "Email",
    },
    footer: {
      text:
        "Srpski proizvođač premium ribolovnih varalica. Svaka varalica je pažljivo izrađena za maksimalne rezultate.",
      navTitle: "Navigacija",
      models: "Modeli varalica",
      contactTitle: "Kontakt",
      rights: "© 2026 SFT Fishing. Sva prava zadržana.",
      made: "Izrađeno sa strašću za ribolov.",
    },
  },
  en: {
    languageLabel: "Language",
    languageName: "EN",
    nav: {
      home: "Home",
      models: "Models",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Sport Fishing Tackle",
      title: "SFT Fishing",
      accent: "Lures",
      intro:
        "Premium fishing lures crafted with a passion for angling. Built for recreational anglers and competitors who do not settle for compromises.",
      primary: "View models",
      secondary: "Contact us",
      imageAlt: "Misty lake at dawn",
    },
    stats: [
      { value: "100%", label: "Handmade", text: "Every lure is carefully finished" },
      { value: "2", label: "Models", text: "Alfa and Zed galleries with real photos" },
      { value: "SRB", label: "Serbian brand", text: "Sport fishing tackle from Serbia" },
    ],
    productsLabel: "Our products",
    productsTitle: "Lure models",
    productsText:
      "Models Alfa and Zed are presented through galleries of real finishes, available dimensions, and a quick path to contact.",
    products: [
      {
        eyebrow: "Predator lure",
        title: "Model Alfa",
        subtitle: "Strong action and powerful vibration",
        description:
          "Designed for anglers looking for a lure with strong action. Its wide movement and powerful vibration trigger an instinctive strike from predators. It is excellent for catfish fishing, while its stable performance at different retrieve speeds provides confidence and reliability in all fishing conditions.",
        specs: [
          { label: "Dimensions", value: alfaDimensions },
          { label: "Use", value: "Catfish and other predators" },
        ],
        images: alfaImages.map((image, index) => ({
          ...image,
          alt: `Model Alfa finish ${index + 1}`,
          name: alfaLureNames[index],
        })),
        cta: "Request information",
      },
      {
        eyebrow: "Predator lure",
        title: "Model Zed",
        subtitle: "Fine high-frequency vibration",
        description:
          "Intended for targeting predatory fish. Thanks to its easy start-up and fine, high-frequency vibration, it faithfully imitates prey and triggers an instinctive strike from predators. It delivers excellent performance in rivers at different retrieve speeds.",
        specs: [
          { label: "Dimensions", value: zedDimensions },
          { label: "Use", value: "River predators" },
        ],
        images: zedImages.map((image, index) => ({
          ...image,
          alt: `Model Zed finish ${index + 1}`,
          name: zedLureNames[index],
        })),
        cta: "Request information",
      },
    ],
    galleryLabels: {
      previous: "Previous image",
      next: "Next image",
      showImage: "Show image",
      openThumbnail: "Open thumbnail",
    },
    contact: {
      label: "Get in touch",
      title: "Contact us",
      text:
        "Have a question about models, orders, or collaboration? Contact us anytime and we will reply quickly.",
      phone: "Phone",
      email: "Email",
    },
    footer: {
      text:
        "A Serbian producer of premium fishing lures. Every lure is carefully crafted for maximum results.",
      navTitle: "Navigation",
      models: "Lure models",
      contactTitle: "Contact",
      rights: "© 2026 SFT Fishing. All rights reserved.",
      made: "Made with a passion for fishing.",
    },
  },
};

export function ProductLanding({ language }: { language: Language }) {
  const text = copy[language];
  const products = text.products.map((product) => ({
    ...product,
    galleryLabels: text.galleryLabels,
  }));

  return (
    <main className="min-h-screen bg-moss-950 text-stone-50">
      <Header language={language} text={text} />
      <Hero text={text.hero} />

      <section className="border-y border-white/10 bg-moss-850">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 lg:px-8">
          {text.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-black text-brass-400">{stat.value}</p>
              <p className="mt-1 text-sm font-bold text-white">{stat.label}</p>
              <p className="mt-2 text-sm text-reed">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-moss-900 py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-400/60 to-transparent" />
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-center text-xs font-black uppercase tracking-[0.28em] text-brass-400">
            {text.productsLabel}
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-black text-white sm:text-6xl">
            {text.productsTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-reed sm:text-lg">
            {text.productsText}
          </p>

          <div id="modeli" className="mt-14 space-y-20">
            {products.map((product, index) => (
              <ProductShowcase key={product.title} {...product} eager={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <Contact text={text.contact} />
      <Footer text={text.footer} nav={text.nav} />
    </main>
  );
}

function Header({
  language,
  text,
}: {
  language: Language;
  text: (typeof copy)[Language];
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-moss-950/88 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#" className="relative h-12 w-28" aria-label="SFT Fishing početna">
          <Image
            src="/images/sft-logo.png"
            alt="SFT Fishing logo"
            fill
            className="object-contain"
            sizes="112px"
            priority
          />
        </a>
        <div className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.18em] text-reed sm:flex">
          <a className="transition hover:text-brass-300" href="#">
            {text.nav.home}
          </a>
          <a className="transition hover:text-brass-300" href="#modeli">
            {text.nav.models}
          </a>
          <a className="transition hover:text-brass-300" href="#kontakt">
            {text.nav.contact}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="hidden overflow-hidden rounded-md border border-white/15 text-xs font-black text-white sm:flex"
            aria-label={text.languageLabel}
          >
            {languages.map((option) => (
              <Link
                key={option}
                href={`/${option}`}
                aria-current={language === option ? "page" : undefined}
                className={`px-3 py-2 transition hover:bg-white/10 ${
                  language === option ? "bg-brass-400 text-moss-950" : "text-white"
                }`}
              >
                {copy[option].languageName}
              </Link>
            ))}
          </div>
          <a
            href={`tel:${phoneHref}`}
            className="rounded-md border border-brass-400/70 px-4 py-3 text-xs font-black text-brass-300 transition hover:bg-brass-400 hover:text-moss-950"
          >
            {phoneDisplay}
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero({ text }: { text: (typeof copy)[Language]["hero"] }) {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-20">
      <Image
        src="/images/hero-fishing.png"
        alt={text.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,185,74,0.16),transparent_34%),linear-gradient(to_bottom,rgba(6,17,8,0.3),rgba(6,17,8,0.92))]" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-brass-300">
          {text.eyebrow}
        </p>
        <h1 className="mt-5 font-display text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
          {text.title}
          <span className="block text-brass-400">{text.accent}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-8 text-stone-200 sm:text-lg">
          {text.intro}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#modeli"
            className="w-full rounded-md bg-brass-400 px-7 py-4 text-sm font-black text-moss-950 shadow-glow transition hover:bg-brass-300 sm:w-auto"
          >
            {text.primary}
          </a>
          <a
            href="#kontakt"
            className="w-full rounded-md border border-white/45 px-7 py-4 text-sm font-black text-white transition hover:border-brass-300 hover:text-brass-300 sm:w-auto"
          >
            {text.secondary}
          </a>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-10 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-brass-300 to-transparent" />
    </section>
  );
}

function Contact({ text }: { text: (typeof copy)[Language]["contact"] }) {
  return (
    <section id="kontakt" className="bg-moss-850 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-brass-400">
          {text.label}
        </p>
        <h2 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl">
          {text.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-reed">
          {text.text}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <a
            href={`tel:${phoneHref}`}
            className="rounded-md border border-white/10 bg-moss-950 p-8 transition hover:border-brass-400/70"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brass-400 text-moss-950">
              <Phone size={24} />
            </span>
            <span className="mt-5 block text-xs font-black uppercase tracking-[0.18em] text-reed">
              {text.phone}
            </span>
            <span className="mt-2 block text-xl font-black text-white">{phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="rounded-md border border-white/10 bg-moss-950 p-8 transition hover:border-brass-400/70"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brass-400 text-moss-950">
              <Mail size={24} />
            </span>
            <span className="mt-5 block text-xs font-black uppercase tracking-[0.18em] text-reed">
              {text.email}
            </span>
            <span className="mt-2 block text-xl font-black text-white">{email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({
  text,
  nav,
}: {
  text: (typeof copy)[Language]["footer"];
  nav: (typeof copy)[Language]["nav"];
}) {
  return (
    <footer className="border-t border-white/10 bg-moss-900 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Image src="/images/sft-logo.png" alt="SFT Fishing logo" width={132} height={58} className="h-auto w-32" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-reed">
            {text.text}
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brass-400">{text.navTitle}</p>
          <div className="mt-4 grid gap-3 text-sm text-reed">
            <a className="hover:text-brass-300" href="#">{nav.home}</a>
            <a className="hover:text-brass-300" href="#modeli">{text.models}</a>
            <a className="hover:text-brass-300" href="#kontakt">{nav.contact}</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brass-400">{text.contactTitle}</p>
          <div className="mt-4 grid gap-3 text-sm text-reed">
            <a className="hover:text-brass-300" href={`tel:${phoneHref}`}>{phoneDisplay}</a>
            <a className="hover:text-brass-300" href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 px-5 pt-6 text-xs text-reed sm:flex-row lg:px-8">
        <p>{text.rights}</p>
        <p>{text.made}</p>
      </div>
    </footer>
  );
}
