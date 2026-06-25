import { notFound } from "next/navigation";
import { MaintenanceLanding } from "../components/maintenance-landing";

const locales = ["rs", "en"] as const;
type Locale = (typeof locales)[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <MaintenanceLanding language={locale as Locale} />;
}
