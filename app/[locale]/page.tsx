import { notFound } from "next/navigation";
import { ProductLanding, type ProductLandingLanguage } from "../components/product-landing";

const locales = ["rs", "en", "it"] as const satisfies readonly ProductLandingLanguage[];
type Locale = ProductLandingLanguage;

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

  return <ProductLanding language={locale as Locale} />;
}
