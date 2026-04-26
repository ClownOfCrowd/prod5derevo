import {getLocale, getTranslations} from 'next-intl/server';
import {certificationBadges} from '@/lib/data';

export default async function CertificationsPage() {
  const t = await getTranslations('Certifications');
  const locale = (await getLocale()) as 'de' | 'en' | 'es' | 'ru';

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <h1 className="font-serif text-5xl text-[var(--foreground)]">{t('title')}</h1>
      <p className="mt-3 max-w-2xl text-[var(--secondary)]">{t('subtitle')}</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {certificationBadges.map((item) => (
          <article key={item.en} className="surface-card rounded-2xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{t('certified')}</p>
            <h2 className="mt-2 font-serif text-3xl text-[var(--foreground)]">{item[locale]}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t('description')}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

