import {notFound} from 'next/navigation';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';
import {CookieBanner} from '@/components/cookie-banner';
import {LocaleSync} from '@/components/locale-sync';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <LocaleSync />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </div>
    </NextIntlClientProvider>
  );
}

