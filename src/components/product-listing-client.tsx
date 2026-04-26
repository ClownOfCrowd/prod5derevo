'use client';

import {useMemo, useState, useTransition} from 'react';
import {Product} from '@/lib/data';
import {Locale} from '@/i18n/routing';
import {ProductCard} from './product-card';
import {localizeWoodType} from '@/lib/localization';

type Props = {
  products: Product[];
  locale: Locale;
  title: string;
  subtitle: string;
  labels: {
    filters: string;
    woodType: string;
    thickness: string;
    grade: string;
    price: string;
    clear: string;
    results: string;
    filterOpen: string;
    filterClose: string;
    details: string;
    all: string;
  };
};

const priceRanges = [
  {label: '< 700', min: 0, max: 700},
  {label: '700 - 1000', min: 700, max: 1000},
  {label: '1000+', min: 1000, max: Number.MAX_SAFE_INTEGER}
];

export function ProductListingClient({products, locale, title, subtitle, labels}: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [woodType, setWoodType] = useState('all');
  const [thickness, setThickness] = useState('all');
  const [grade, setGrade] = useState('all');
  const [price, setPrice] = useState('all');

  const woodTypes = ['all', ...new Set(products.map((item) => item.woodType))];
  const thicknesses = ['all', ...new Set(products.map((item) => String(item.thicknessMm)))];
  const grades = ['all', ...new Set(products.map((item) => item.grade))];

  const filtered = useMemo(() => {
    return products.filter((item) => {
      const woodCheck = woodType === 'all' || item.woodType === woodType;
      const thicknessCheck = thickness === 'all' || String(item.thicknessMm) === thickness;
      const gradeCheck = grade === 'all' || item.grade === grade;
      const priceCheck =
        price === 'all' ||
        priceRanges.some(
          (range) =>
            range.label === price && item.pricePerM3 >= range.min && item.pricePerM3 < range.max
        );

      return woodCheck && thicknessCheck && gradeCheck && priceCheck;
    });
  }, [grade, price, products, thickness, woodType]);

  const clearFilters = () => {
    startTransition(() => {
      setWoodType('all');
      setThickness('all');
      setGrade('all');
      setPrice('all');
    });
  };

  const panel = (
    <aside className="surface-card rounded-2xl p-4 md:sticky md:top-24 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">{labels.filters}</h2>
        <button
          type="button"
          onClick={clearFilters}
          className="text-xs font-medium text-[var(--accent)]"
        >
          {labels.clear}
        </button>
      </div>

      <div className="space-y-4 text-sm">
        <label className="block">
          <span className="mb-1 block text-[var(--secondary)]">{labels.woodType}</span>
          <select
            className="w-full rounded-lg border border-[var(--line)] bg-[#fdfbf8] px-3 py-2"
            value={woodType}
            onChange={(event) =>
              startTransition(() => {
                setWoodType(event.target.value);
              })
            }
          >
            {woodTypes.map((option) => (
              <option key={option} value={option}>
                {option === 'all' ? labels.all : localizeWoodType(option, locale)}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[var(--secondary)]">{labels.thickness}</span>
          <select
            className="w-full rounded-lg border border-[var(--line)] bg-[#fdfbf8] px-3 py-2"
            value={thickness}
            onChange={(event) =>
              startTransition(() => {
                setThickness(event.target.value);
              })
            }
          >
            {thicknesses.map((option) => (
              <option key={option} value={option}>
                {option === 'all' ? labels.all : `${option} mm`}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[var(--secondary)]">{labels.grade}</span>
          <select
            className="w-full rounded-lg border border-[var(--line)] bg-[#fdfbf8] px-3 py-2"
            value={grade}
            onChange={(event) =>
              startTransition(() => {
                setGrade(event.target.value);
              })
            }
          >
            {grades.map((option) => (
              <option key={option} value={option}>
                {option === 'all' ? labels.all : option}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-[var(--secondary)]">{labels.price}</span>
          <select
            className="w-full rounded-lg border border-[var(--line)] bg-[#fdfbf8] px-3 py-2"
            value={price}
            onChange={(event) =>
              startTransition(() => {
                setPrice(event.target.value);
              })
            }
          >
            <option value="all">{labels.all}</option>
            {priceRanges.map((range) => (
              <option key={range.label} value={range.label}>
                {range.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </aside>
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-serif text-4xl text-[var(--foreground)]">{title}</h1>
          <p className="mt-2 text-[var(--secondary)]">{subtitle}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen((state) => !state)}
          className="btn-secondary px-4 py-2 text-sm md:hidden"
        >
          {open ? labels.filterClose : labels.filterOpen}
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-[260px_1fr]">
        <div className="hidden md:block">{panel}</div>
        {open && <div className="md:hidden">{panel}</div>}

        <div>
          <p className="mb-4 text-sm text-[var(--secondary)]">
            {labels.results}: <span className="font-semibold text-[var(--foreground)]">{filtered.length}</span>
          </p>

          {isPending ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3" aria-live="polite" aria-busy>
              {Array.from({length: 6}).map((_, index) => (
                <div key={`skeleton-${index}`} className="surface-card overflow-hidden rounded-2xl">
                  <div className="h-52 animate-pulse bg-[color-mix(in_srgb,var(--surface)_62%,var(--secondary-accent))]" />
                  <div className="space-y-3 p-5">
                    <div className="h-3 w-20 animate-pulse rounded bg-[color-mix(in_srgb,var(--surface)_56%,var(--secondary-accent))]" />
                    <div className="h-7 w-2/3 animate-pulse rounded bg-[color-mix(in_srgb,var(--surface)_56%,var(--secondary-accent))]" />
                    <div className="h-4 w-full animate-pulse rounded bg-[color-mix(in_srgb,var(--surface)_62%,var(--secondary-accent))]" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-[color-mix(in_srgb,var(--surface)_62%,var(--secondary-accent))]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  locale={locale}
                  detailsLabel={labels.details}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}




