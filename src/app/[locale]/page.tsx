import Image from 'next/image';
import {getLocale, getTranslations} from 'next-intl/server';
import {
  categories,
  certificationBadges,
  comparisonRows,
  faqs,
  products,
  technicalTable,
  testimonials,
  trustMetrics,
  woodGuide
} from '@/lib/data';
import {Link} from '@/i18n/navigation';
import {MotionReveal} from '@/components/motion-reveal';
import {localizeWoodType} from '@/lib/localization';

export default async function HomePage() {
  const t = await getTranslations('Home');
  const locale = (await getLocale()) as 'de' | 'en' | 'es' | 'ru';

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1625937329935-28761c78f0ea?auto=format&fit=crop&w=2000&q=80"
            className="h-full w-full object-cover"
            style={{filter: 'saturate(44%) contrast(116%) brightness(34%)'}}
          >
            <source src="/media/hero-wood.webm" type="video/webm" />
            <source src="/media/hero-wood.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(5,14,18,0.9)_0%,rgba(5,14,18,0.76)_42%,rgba(5,14,18,0.58)_72%,rgba(5,14,18,0.48)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(5,14,18,0)_0%,rgba(5,14,18,0.64)_100%)] md:h-52" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32">
          <MotionReveal>
            <p className="text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.68)] md:text-2xl">
              {t('tagline')}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-white [text-shadow:0_12px_34px_rgba(0,0,0,0.72)] md:text-7xl">
              {t('heroTitle')}
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-medium leading-8 text-white [text-shadow:0_4px_16px_rgba(0,0,0,0.68)] md:text-2xl md:leading-9">
              {t('heroSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary px-5 py-3 text-sm font-medium">
                {t('heroPrimary')}
              </Link>
              <Link href="/contact" className="btn-secondary px-5 py-3 text-sm font-medium">
                {t('heroSecondary')}
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <MotionReveal>
          <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('categoriesTitle')}</h2>
        </MotionReveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category, index) => (
            <MotionReveal key={category.id} delay={index * 0.06}>
              <article className="surface-card group overflow-hidden rounded-2xl">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title[locale]}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1280px) 50vw, 20vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-2xl text-[var(--foreground)]">{category.title[locale]}</h3>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-4 md:grid-cols-[1.2fr_1fr] md:px-8">
        <article className="surface-card rounded-2xl p-7">
          <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('philosophyTitle')}</h2>
          <p className="mt-4 leading-7 text-[var(--secondary)]">{t('philosophyText')}</p>
        </article>
        <article className="rounded-2xl border border-[var(--line)] bg-[var(--accent)] p-7 text-white shadow-lg shadow-[rgba(164,117,81,0.28)]">
          <p className="text-sm uppercase tracking-[0.2em]">{t('trustHeadline')}</p>
          <p className="mt-4 text-4xl font-semibold">12000+ m3</p>
          <p className="mt-1 text-sm text-stone-100">{t('trustText')}</p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {trustMetrics.map((metric) => (
            <article key={metric.value} className="surface-card rounded-2xl p-6">
              <p className="text-4xl font-semibold text-[var(--foreground)]">{metric.value}</p>
              <p className="mt-2 text-sm font-medium text-[var(--foreground)]">{metric.label[locale]}</p>
              {metric.note && <p className="mt-1 text-sm text-[var(--secondary)]">{metric.note[locale]}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('featuredTitle')}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <article key={product.slug} className="surface-card rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">{localizeWoodType(product.woodType, locale)}</p>
              <h3 className="mt-2 font-serif text-2xl text-[var(--foreground)]">{product.title[locale]}</h3>
              <p className="mt-2 text-sm text-[var(--secondary)]">{product.description[locale]}</p>
              <Link href={`/products/${product.slug}`} className="mt-4 inline-flex text-sm font-medium text-[var(--accent)]">
                {t('details')}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('woodGuideTitle')}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {woodGuide.map((item) => (
            <article key={item.title.en} className="surface-card rounded-2xl p-6">
              <h3 className="font-serif text-2xl text-[var(--foreground)]">{item.title[locale]}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{item.text[locale]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('comparisonTitle')}</h2>
        <div className="surface-card mt-6 overflow-x-auto rounded-2xl">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_92%,var(--secondary-accent))] text-[var(--secondary)]">
              <tr>
                <th className="px-4 py-3">{t('tableType')}</th>
                <th className="px-4 py-3">{t('tableDensity')}</th>
                <th className="px-4 py-3">{t('tableDurability')}</th>
                <th className="px-4 py-3">{t('tableBestUse')}</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.type.en} className="border-b border-[var(--line)]">
                  <td className="px-4 py-3 font-medium text-[var(--foreground)]">{row.type[locale]}</td>
                  <td className="px-4 py-3 text-[var(--secondary)]">{row.density}</td>
                  <td className="px-4 py-3 text-[var(--secondary)]">{row.durability[locale]}</td>
                  <td className="px-4 py-3 text-[var(--secondary)]">{row.bestUse[locale]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('technicalTitle')}</h2>
        <div className="surface-card mt-6 overflow-hidden rounded-2xl">
          <table className="min-w-full text-left text-sm">
            <tbody>
              {technicalTable.map((row) => (
                <tr key={row.parameter.en} className="border-b border-[var(--line)]">
                  <td className="w-1/2 px-4 py-3 font-medium text-[var(--foreground)]">{row.parameter[locale]}</td>
                  <td className="px-4 py-3 text-[var(--secondary)]">{row.value[locale]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
        <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('certificationsTitle')}</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {certificationBadges.map((badge) => (
            <span
              key={badge.en}
              className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--secondary)]"
            >
              {badge[locale]}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('testimonialsTitle')}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.company} className="surface-card rounded-2xl p-6">
              <p className="text-sm leading-7 text-[var(--secondary)]">&ldquo;{item.quote[locale]}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">{item.person[locale]}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">{item.company}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('faqTitle')}</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <details key={item.question.en} className="surface-card rounded-2xl p-5">
              <summary className="cursor-pointer text-sm font-semibold text-[var(--foreground)]">{item.question[locale]}</summary>
              <p className="mt-3 text-sm leading-6 text-[var(--secondary)]">{item.answer[locale]}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="surface-card mx-auto mb-10 w-full max-w-7xl rounded-2xl px-6 py-12 text-center md:px-10">
        <h2 className="font-serif text-4xl text-[var(--foreground)]">{t('finalTitle')}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--secondary)]">{t('finalText')}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-primary px-6 py-3 text-sm font-medium">
            {t('heroSecondary')}
          </Link>
          <Link href="/catalog" className="btn-secondary px-6 py-3 text-sm font-medium">
            {t('heroPrimary')}
          </Link>
        </div>
      </section>
    </>
  );
}

