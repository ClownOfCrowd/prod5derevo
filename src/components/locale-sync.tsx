'use client';

import {useEffect} from 'react';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';

export function LocaleSync() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const preferred = localStorage.getItem('preferred_locale');
    if (preferred && preferred !== locale && routing.locales.includes(preferred as (typeof routing.locales)[number])) {
      router.replace(pathname, {locale: preferred});
    }
  }, [locale, pathname, router]);

  return null;
}




