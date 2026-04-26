import {getTranslations} from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('About');

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <h1 className="font-serif text-5xl text-[var(--foreground)]">{t('title')}</h1>
      <p className="mt-3 max-w-3xl text-[var(--secondary)]">{t('subtitle')}</p>

      <div className="surface-card mt-8 rounded-2xl p-7">
        <p className="text-sm leading-7 text-[var(--secondary)]">{t('introOne')}</p>
        <p className="mt-4 text-sm leading-7 text-[var(--secondary)]">{t('introTwo')}</p>
        <p className="mt-4 text-sm leading-7 text-[var(--secondary)]">{t('introThree')}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="surface-card rounded-2xl p-6">
          <h2 className="font-serif text-3xl text-[var(--foreground)]">{t('companyTitle')}</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t('companyText')}</p>
        </article>
        <article className="surface-card rounded-2xl p-6">
          <h2 className="font-serif text-3xl text-[var(--foreground)]">{t('productionTitle')}</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t('productionText')}</p>
        </article>
        <article className="surface-card rounded-2xl p-6">
          <h2 className="font-serif text-3xl text-[var(--foreground)]">{t('philosophyTitle')}</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t('philosophyText')}</p>
        </article>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="surface-card rounded-2xl p-6">
          <h3 className="font-serif text-2xl text-[var(--foreground)]">{t('principleOneTitle')}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t('principleOneText')}</p>
        </article>
        <article className="surface-card rounded-2xl p-6">
          <h3 className="font-serif text-2xl text-[var(--foreground)]">{t('principleTwoTitle')}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t('principleTwoText')}</p>
        </article>
        <article className="surface-card rounded-2xl p-6">
          <h3 className="font-serif text-2xl text-[var(--foreground)]">{t('principleThreeTitle')}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t('principleThreeText')}</p>
        </article>
      </div>
    </section>
  );
}

