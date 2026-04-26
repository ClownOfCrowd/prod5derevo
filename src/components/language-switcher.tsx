'use client';

import {ChangeEvent} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/i18n/routing';
import {usePathname, useRouter} from '@/i18n/navigation';

export function LanguageSwitcher() {
  const t = useTranslations('Common');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    localStorage.setItem('preferred_locale', nextLocale);
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000`;
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <label className="inline-flex items-center gap-2 text-sm text-[var(--secondary)]">
      <span>{t('language')}</span>
      <select
        aria-label={t('language')}
        value={locale}
        onChange={onChange}
        className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--foreground)]"
      >
        {routing.locales.map((item) => (
          <option key={item} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}




