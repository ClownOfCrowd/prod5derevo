import Image from 'next/image';
import {Product} from '@/lib/data';
import {Locale} from '@/i18n/routing';
import {Link} from '@/i18n/navigation';
import {localizeWoodType} from '@/lib/localization';

type Props = {
  product: Product;
  locale: Locale;
  detailsLabel: string;
};

export function ProductCard({product, locale, detailsLabel}: Props) {
  return (
    <article className="surface-card group overflow-hidden rounded-2xl transition hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title[locale]}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary)]">{localizeWoodType(product.woodType, locale)}</p>
        <h3 className="font-serif text-2xl text-[var(--foreground)]">{product.title[locale]}</h3>
        <p className="text-sm leading-6 text-[var(--secondary)]">{product.description[locale]}</p>
        <div className="grid grid-cols-2 gap-2 text-sm text-[var(--secondary)]">
          <span>{product.thicknessMm} mm</span>
          <span>{product.grade}</span>
          <span>{product.densityKgM3} kg/m3</span>
          <span>EUR {product.pricePerM3}/m3</span>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="btn-secondary inline-flex px-4 py-2 text-sm font-medium"
        >
          {detailsLabel}
        </Link>
      </div>
    </article>
  );
}




