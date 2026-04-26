import Image from 'next/image';
import {notFound} from 'next/navigation';
import {getLocale, getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {productBenefits, products} from '@/lib/data';
import {localizeApplication, localizeValue, localizeWoodType} from '@/lib/localization';

export function generateStaticParams() {
  return products.map((product) => ({slug: product.slug}));
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const locale = (await getLocale()) as 'de' | 'en' | 'es' | 'ru';
  const t = await getTranslations('ProductDetail');
  const product = products.find((item) => item.slug === slug);
  const benefits = productBenefits[slug] ?? [];

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
      <Link href="/products" className="text-sm text-[var(--accent)]">
        {t('back')}
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="surface-card relative overflow-hidden rounded-2xl">
          <div className="relative h-[460px] overflow-hidden">
            <Image
              src={product.image}
              alt={product.title[locale]}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">{localizeWoodType(product.woodType, locale)}</p>
          <h1 className="font-serif text-5xl text-[var(--foreground)]">{product.title[locale]}</h1>
          <div className="surface-card rounded-2xl p-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">{t('overview')}</h2>
            <p className="text-sm leading-7 text-[var(--secondary)]">{product.description[locale]}</p>
          </div>

          <div className="surface-card rounded-2xl p-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
              {t('specs')}
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm text-[var(--secondary)]">
              <div>{t('size')}</div>
              <div>{product.sizes.map((size) => localizeValue(size, locale)).join(', ')}</div>
              <div>{t('density')}</div>
              <div>{product.densityKgM3} kg/m3</div>
              <div>{t('moisture')}</div>
              <div>{localizeValue(product.moisturePercent, locale)}</div>
              <div>{t('thickness')}</div>
              <div>{product.thicknessMm} mm</div>
              <div>{t('grade')}</div>
              <div>{product.grade}</div>
            </div>
          </div>

          <div className="surface-card rounded-2xl p-5">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
              {t('benefits')}
            </h2>
            <ul className="space-y-1 text-sm text-[var(--secondary)]">
              {benefits.map((benefit) => (
                <li key={benefit.en}>- {benefit[locale]}</li>
              ))}
            </ul>
          </div>

          <div className="surface-card rounded-2xl p-5">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">
              {t('applications')}
            </h2>
            <ul className="space-y-1 text-sm text-[var(--secondary)]">
              {product.applications.map((application) => (
                <li key={application}>- {localizeApplication(application, locale)}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/contact?product=${product.slug}`}
              className="btn-primary px-5 py-3 text-sm font-medium"
            >
              {t('requestQuote')}
            </Link>
            <Link
              href={`/contact?bulk=${product.slug}`}
              className="btn-secondary px-5 py-3 text-sm font-medium"
            >
              {t('bulkOrder')}
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--line)] bg-[var(--surface)]/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-3">
          <Link
            href={`/contact?product=${product.slug}`}
            className="btn-primary flex-1 px-4 py-3 text-center text-sm font-medium"
          >
            {t('requestQuote')}
          </Link>
          <Link
            href={`/contact?bulk=${product.slug}`}
            className="btn-secondary flex-1 px-4 py-3 text-center text-sm font-medium"
          >
            {t('bulkOrder')}
          </Link>
        </div>
      </div>
    </section>
  );
}

