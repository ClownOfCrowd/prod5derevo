import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-[var(--surface)]/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-2xl font-semibold text-[var(--foreground)]">Forstwerk</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--secondary)]">{t('tagline')}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[var(--secondary)]">Natural quality. Engineered precision.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">{t('pages')}</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--secondary)]">
            <li>
              <Link href="/catalog" className="transition hover:text-[var(--accent)]">{t('catalog')}</Link>
            </li>
            <li>
              <Link href="/products" className="transition hover:text-[var(--accent)]">{t('products')}</Link>
            </li>
            <li>
              <Link href="/certifications" className="transition hover:text-[var(--accent)]">{t('certifications')}</Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-[var(--accent)]">{t('contact')}</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">{t('contactTitle')}</p>
          <p className="mt-3 text-sm text-[var(--secondary)]">sales@forstwerk.de</p>
          <p className="text-sm text-[var(--secondary)]">+49 30 555 21 90</p>
          <p className="mt-2 text-sm text-[var(--secondary)]">Hamburg / Berlin logistics hubs</p>
          <p className="mt-4 text-xs text-[var(--secondary)]">ISO 9001 | FSC | CARB2</p>
        </div>
      </div>
    </footer>
  );
}




