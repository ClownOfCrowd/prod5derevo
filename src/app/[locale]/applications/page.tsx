import {getTranslations} from 'next-intl/server';

const cards = ['construction', 'furniture', 'interior', 'outdoor'] as const;

export default async function ApplicationsPage() {
  const t = await getTranslations('Applications');

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <h1 className="font-serif text-5xl text-[var(--foreground)]">{t('title')}</h1>
      <p className="mt-3 max-w-2xl text-[var(--secondary)]">{t('subtitle')}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <article key={card} className="surface-card rounded-2xl p-6">
            <h2 className="font-serif text-3xl text-[var(--foreground)]">{t(`${card}.title`)}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t(`${card}.text`)}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t(`${card}.detail`)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

