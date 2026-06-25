import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const phoneDisplay = "+381 69 660 654";
const phoneHref = "+38169660654";
const email = "sft.srb@gmail.com";

export default function Home() {
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

      <section className="relative z-10 flex min-h-screen items-center px-5 py-10 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="relative h-16 w-40">
              <Image
                src="/images/sft-logo.png"
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
              Website under maintenance
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-stone-200 sm:text-xl">
              We are preparing our fishing lure catalogue and online experience.
              Leave us a message, call us, or send an email and we will reach
              out as soon as the first models are ready.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center justify-center gap-3 rounded-md bg-brass-400 px-6 py-4 text-sm font-black text-moss-950 shadow-glow transition hover:bg-brass-300"
              >
                <Phone size={19} />
                Call us
              </a>
              <a
                href={`mailto:${email}?subject=SFT%20Fishing%20waiting%20list&body=Hello%20SFT%20Fishing%2C%0A%0APlease%20add%20me%20to%20the%20waiting%20list.%0A%0AName%3A%20%0APhone%3A%20%0AInterested%20in%3A%20`}
                className="inline-flex items-center justify-center gap-3 rounded-md border border-white/45 px-6 py-4 text-sm font-black text-white transition hover:border-brass-300 hover:text-brass-300"
              >
                <Mail size={19} />
                Join waiting list
              </a>
            </div>
          </div>

          <aside className="rounded-md border border-white/10 bg-moss-950/86 p-6 shadow-2xl shadow-black/35 backdrop-blur md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brass-400">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">
              Reach us while we build
            </h2>
            <p className="mt-4 text-base leading-7 text-reed">
              Send your name and preferred contact details. We will keep a
              simple waiting list and contact you when SFT Fishing products are
              ready for orders.
            </p>

            <div className="mt-7 grid gap-4">
              <a
                href={`tel:${phoneHref}`}
                className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-brass-400/70"
              >
                <span className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-brass-300">
                  <Phone size={18} />
                  Phone
                </span>
                <span className="mt-3 block text-xl font-black text-white">
                  {phoneDisplay}
                </span>
              </a>

              <a
                href={`mailto:${email}?subject=SFT%20Fishing%20waiting%20list`}
                className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-brass-400/70"
              >
                <span className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-brass-300">
                  <Mail size={18} />
                  Email
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
