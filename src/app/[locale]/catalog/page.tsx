import Image from 'next/image';
import {getLocale, getTranslations} from 'next-intl/server';
import {categories} from '@/lib/data';
import {Link} from '@/i18n/navigation';

export default async function CatalogPage() {
  const t = await getTranslations('Catalog');
  const locale = (await getLocale()) as 'de' | 'en' | 'es' | 'ru';

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <h1 className="font-serif text-5xl text-[var(--foreground)]">{t('title')}</h1>
      <p className="mt-3 max-w-2xl text-[var(--secondary)]">{t('subtitle')}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <article key={category.id} className="surface-card overflow-hidden rounded-2xl">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={category.image}
                alt={category.title[locale]}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-5">
              <h2 className="font-serif text-3xl text-[var(--foreground)]">{category.title[locale]}</h2>
              <p className="text-sm leading-6 text-[var(--secondary)]">{category.teaser[locale]}</p>
              <Link
                href={`/products?category=${category.id}`}
                className="btn-secondary inline-flex px-4 py-2 text-sm font-medium"
              >
                {t('explore')}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

