'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {LanguageSwitcher} from './language-switcher';

const links = [
  {href: '/', key: 'home'},
  {href: '/catalog', key: 'catalog'},
  {href: '/products', key: 'products'},
  {href: '/applications', key: 'applications'},
  {href: '/about', key: 'about'},
  {href: '/certifications', key: 'certifications'},
  {href: '/contact', key: 'contact'}
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('Nav');
  const common = useTranslations('Common');

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-[var(--foreground)] transition hover:opacity-80">
          Forstwerk
        </Link>

        <button
          className="btn-secondary px-4 py-2 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? common('close') : common('menu')}
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(link.href)
                  ? 'bg-[var(--secondary-accent)] text-[var(--foreground)]'
                  : 'text-[var(--secondary)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]'
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="btn-primary px-5 py-2.5 text-sm font-medium"
          >
            {common('requestQuote')}
          </Link>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--surface)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`rounded-xl px-3 py-2 text-base font-medium transition ${
                  isActive(link.href)
                    ? 'bg-[var(--secondary-accent)] text-[var(--foreground)]'
                    : 'text-[var(--secondary)] hover:bg-[color-mix(in_srgb,var(--surface)_88%,var(--secondary-accent))]'
                }`}
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <Link
              href="/contact"
              className="btn-primary px-4 py-2 text-center text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {common('requestQuote')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}




