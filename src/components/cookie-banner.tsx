'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

export function CookieBanner() {
  const t = useTranslations('Cookies');
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return !localStorage.getItem('wood_cookies');
  });

  const setChoice = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('wood_cookies', choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl border border-[var(--line)] bg-[var(--surface)]/95 p-4 shadow-xl backdrop-blur">
      <p className="text-sm text-[var(--secondary)]">{t('text')}</p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => setChoice('accepted')}
          className="btn-primary px-4 py-2 text-sm font-medium"
        >
          {t('accept')}
        </button>
        <button
          type="button"
          onClick={() => setChoice('rejected')}
          className="btn-secondary px-4 py-2 text-sm font-medium text-[var(--secondary)]"
        >
          {t('reject')}
        </button>
      </div>
    </div>
  );
}




