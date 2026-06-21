import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { ProductShowcase } from "./components/product-showcase";

const phoneDisplay = "+381 69 660 654";
const phoneHref = "+38169660654";
const email = "sft.srb@gmail.com";

const products = [
  {
    eyebrow: "Varalica za predatore",
    title: "SFT Predator Model",
    subtitle: "Predator serija",
    description:
      "Dizajnirana za lov štuke, smuđa i basa. Realističan izgled i precizno balansiran pokret privlače i najopreznije ribe.",
    specs: [
      { label: "Dužina", value: "9 cm" },
      { label: "Težina", value: "12 g" },
      { label: "Dubina", value: "0.5 - 1.5 m" },
      { label: "Tip", value: "Wobbler" },
    ],
    images: Array.from({ length: 10 }, (_, index) => ({
      alt: `SFT Predator Model prikaz ${index + 1}`,
      image: `/models/model-${String(index + 1).padStart(2, "0")}.svg`,
    })),
  },
  {
    eyebrow: "Varalica za sve uslove",
    title: "SFT River Model",
    subtitle: "River serija",
    description:
      "Varalica za reku, jezero i mutnu vodu, sa upadljivim dekorima i stabilnim radom pri sporom i brzom vođenju.",
    specs: [
      { label: "Dužina", value: "8 cm" },
      { label: "Težina", value: "14 g" },
      { label: "Dubina", value: "1.2 - 2.4 m" },
      { label: "Tip", value: "Minnow" },
    ],
    images: Array.from({ length: 10 }, (_, index) => ({
      alt: `SFT River Model prikaz ${index + 1}`,
      image: `/models/model-${String(index + 11).padStart(2, "0")}.svg`,
    })),
  },
];

const stats = [
  { value: "100%", label: "Ručna izrada", text: "Svaka varalica pažljivo završena" },
  { value: "2", label: "Galerije modela", text: "Po deset dummy modela za start" },
  { value: "SRB", label: "Domaći brend", text: "Sportski ribolov iz Srbije" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-moss-950 text-stone-50">
      <Header />
      <Hero />

      <section className="border-y border-white/10 bg-moss-850">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 lg:px-8">
          {stats.map((stat) => (
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
            Naši proizvodi
          </p>
          <h2 className="mt-4 text-center font-display text-4xl font-black text-white sm:text-6xl">
            Modeli varalica
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-reed sm:text-lg">
            Za početak su tu dva primera varalica. Svaki model ima svoju
            galeriju sa deset dummy slika, osnovne mere i brzu putanju do
            kontakta.
          </p>

          <div id="modeli" className="mt-14 space-y-20">
            {products.map((product) => (
              <ProductShowcase key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
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
            Početna
          </a>
          <a className="transition hover:text-brass-300" href="#modeli">
            Modeli
          </a>
          <a className="transition hover:text-brass-300" href="#kontakt">
            Kontakt
          </a>
        </div>
        <a
          href={`tel:${phoneHref}`}
          className="rounded-md border border-brass-400/70 px-4 py-3 text-xs font-black text-brass-300 transition hover:bg-brass-400 hover:text-moss-950"
        >
          {phoneDisplay}
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-20">
      <Image
        src="/images/hero-fishing.png"
        alt="Maglovito jezero u zoru"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,185,74,0.16),transparent_34%),linear-gradient(to_bottom,rgba(6,17,8,0.3),rgba(6,17,8,0.92))]" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-brass-300">
          Sport Fishing Tackle
        </p>
        <h1 className="mt-5 font-display text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
          SFT Fishing
          <span className="block text-brass-400">Varalice</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-8 text-stone-200 sm:text-lg">
          Premium ribolovne varalice izrađene sa strašću za ribolov. Za
          rekreativce i takmičare koji ne pristaju na kompromise.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#modeli"
            className="w-full rounded-md bg-brass-400 px-7 py-4 text-sm font-black text-moss-950 shadow-glow transition hover:bg-brass-300 sm:w-auto"
          >
            Pogledaj modele
          </a>
          <a
            href="#kontakt"
            className="w-full rounded-md border border-white/45 px-7 py-4 text-sm font-black text-white transition hover:border-brass-300 hover:text-brass-300 sm:w-auto"
          >
            Kontaktiraj nas
          </a>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-10 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-brass-300 to-transparent" />
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="bg-moss-850 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-brass-400">
          Stupite u kontakt
        </p>
        <h2 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl">
          Kontaktirajte nas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-reed">
          Imate pitanje o modelima, narudžbini ili saradnji? Slobodno nas
          kontaktirajte, odgovaramo brzo.
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
              Telefon
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
              Email
            </span>
            <span className="mt-2 block text-xl font-black text-white">{email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-moss-900 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Image src="/images/sft-logo.png" alt="SFT Fishing logo" width={132} height={58} className="h-auto w-32" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-reed">
            Srpski proizvođač premium ribolovnih varalica. Svaka varalica je
            pažljivo izrađena za maksimalne rezultate.
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brass-400">Navigacija</p>
          <div className="mt-4 grid gap-3 text-sm text-reed">
            <a className="hover:text-brass-300" href="#">Početna</a>
            <a className="hover:text-brass-300" href="#modeli">Modeli varalica</a>
            <a className="hover:text-brass-300" href="#kontakt">Kontakt</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brass-400">Kontakt</p>
          <div className="mt-4 grid gap-3 text-sm text-reed">
            <a className="hover:text-brass-300" href={`tel:${phoneHref}`}>{phoneDisplay}</a>
            <a className="hover:text-brass-300" href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 px-5 pt-6 text-xs text-reed sm:flex-row lg:px-8">
        <p>© 2026 SFT Fishing. Sva prava zadržana.</p>
        <p>Izrađeno sa strašću za ribolov.</p>
      </div>
    </footer>
  );
}
