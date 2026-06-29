import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const phoneDisplay = "+381 69 660 654";
const phoneHref = "+38169660654";
const email = "sft.srb@gmail.com";

const copy = {
  rs: {
    languageLabel: "Jezik",
    flag: "🇷🇸",
    name: "SRB",
    title: "Sajt je trenutno u pripremi",
    intro:
      "Pripremamo katalog ribolovnih varalica i kompletno online iskustvo. Ostavite nam poruku, pozovite nas ili pošaljite email i javićemo vam se čim prvi modeli budu spremni.",
    call: "Pozovite nas",
    waitlist: "Pridružite se listi čekanja",
    contactLabel: "Kontakt",
    contactTitle: "Tu smo dok gradimo sajt",
    contactText:
      "Pošaljite nam ime i kontakt podatke. Vodićemo jednostavnu listu čekanja i kontaktirati vas kada SFT Fishing proizvodi budu spremni za naručivanje.",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    mailSubject: "SFT Fishing lista čekanja",
    mailBody:
      "Pozdrav SFT Fishing,\n\nMolim vas dodajte me na listu čekanja.\n\nIme:\nTelefon:\nZanima me:",
  },
  en: {
    languageLabel: "Language",
    flag: "🇬🇧",
    name: "EN",
    title: "Website under maintenance",
    intro:
      "We are preparing our fishing lure catalogue and online experience. Leave us a message, call us, or send an email and we will reach out as soon as the first models are ready.",
    call: "Call us",
    waitlist: "Join waiting list",
    contactLabel: "Contact",
    contactTitle: "Reach us while we build",
    contactText:
      "Send your name and preferred contact details. We will keep a simple waiting list and contact you when SFT Fishing products are ready for orders.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    mailSubject: "SFT Fishing waiting list",
    mailBody:
      "Hello SFT Fishing,\n\nPlease add me to the waiting list.\n\nName:\nPhone:\nInterested in:",
  },
};

type Language = keyof typeof copy;

const languages: Language[] = ["rs", "en"];

export function MaintenanceLanding({ language }: { language: Language }) {
  const text = copy[language];
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    text.mailSubject,
  )}&body=${encodeURIComponent(text.mailBody)}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-moss-950 text-stone-50">
      <Image
        src="/images/hero-fishing.png"
        alt="Maglovito jezero u zoru"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,185,74,0.18),transparent_34%),linear-gradient(to_bottom,rgba(6,17,8,0.56),rgba(6,17,8,0.96))]" />
      <div className="absolute right-4 top-4 z-20 grid gap-2 text-xs font-black uppercase tracking-[0.18em] text-brass-300 lg:right-8 lg:top-8">
        <span className="hidden sm:block">{text.languageLabel}</span>
        <nav
          className="flex overflow-hidden rounded-md border border-white/20 bg-moss-950/80 text-sm font-black normal-case tracking-normal text-white backdrop-blur"
          aria-label={text.languageLabel}
        >
          {languages.map((option) => (
            <Link
              key={option}
              href={`/${option}`}
              aria-current={language === option ? "page" : undefined}
              className={`px-2.5 py-2 transition hover:bg-white/10 sm:px-3 ${
                language === option
                  ? "bg-brass-400 text-moss-950"
                  : "text-white"
              }`}
            >
              {copy[option].flag} {copy[option].name}
            </Link>
          ))}
        </nav>
      </div>

      <section className="relative z-10 flex min-h-screen items-center px-5 py-10 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="relative h-16 w-40">
              <Image
                src="/images/logo.svg"
                alt="SFT Fishing logo"
                fill
                className="object-contain object-left"
                sizes="160px"
                priority
              />
            </div>

            <p className="mt-12 text-xs font-black uppercase tracking-[0.3em] text-brass-300">
              SFT Fishing
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-black leading-none text-white sm:text-7xl">
              {text.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-stone-200 sm:text-xl">
              {text.intro}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center justify-center gap-3 rounded-md bg-brass-400 px-6 py-4 text-sm font-black text-moss-950 shadow-glow transition hover:bg-brass-300"
              >
                <Phone size={19} />
                {text.call}
              </a>
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center gap-3 rounded-md border border-white/45 px-6 py-4 text-sm font-black text-white transition hover:border-brass-300 hover:text-brass-300"
              >
                <Mail size={19} />
                {text.waitlist}
              </a>
            </div>
          </div>

          <aside className="rounded-md border border-white/10 bg-moss-950/86 p-6 shadow-2xl shadow-black/35 backdrop-blur md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brass-400">
              {text.contactLabel}
            </p>
            <h2 className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">
              {text.contactTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-reed">{text.contactText}</p>

            <div className="mt-7 grid gap-4">
              <a
                href={`tel:${phoneHref}`}
                className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-brass-400/70"
              >
                <span className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-brass-300">
                  <Phone size={18} />
                  {text.phoneLabel}
                </span>
                <span className="mt-3 block text-xl font-black text-white">
                  {phoneDisplay}
                </span>
              </a>

              <a
                href={`mailto:${email}?subject=${encodeURIComponent(text.mailSubject)}`}
                className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-brass-400/70"
              >
                <span className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-brass-300">
                  <Mail size={18} />
                  {text.emailLabel}
                </span>
                <span className="mt-3 block text-xl font-black text-white">
                  {email}
                </span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
