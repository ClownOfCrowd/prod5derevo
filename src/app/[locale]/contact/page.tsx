import {getTranslations} from 'next-intl/server';
import {QuoteForm} from '@/components/quote-form';

export default async function ContactPage() {
  const t = await getTranslations('Contact');

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <h1 className="font-serif text-5xl text-[var(--foreground)]">{t('title')}</h1>
      <p className="mt-3 max-w-2xl text-[var(--secondary)]">{t('subtitle')}</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <article className="surface-card rounded-2xl p-6">
          <h2 className="font-serif text-3xl text-[var(--foreground)]">{t('fastTitle')}</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{t('fastText')}</p>
          <div className="mt-6 space-y-2 text-sm text-[var(--secondary)]">
            <p>sales@forstwerk.de</p>
            <p>+49 30 555 21 90</p>
            <p>{t('hours')}</p>
          </div>
        </article>

        <QuoteForm
          labels={{
            formTitle: t('formTitle'),
            name: t('name'),
            company: t('company'),
            email: t('email'),
            phone: t('phone'),
            request: t('request'),
            send: t('send'),
            sending: t('sending'),
            success: t('success'),
            error: t('error'),
            required: t('required')
          }}
        />
      </div>
    </section>
  );
}

