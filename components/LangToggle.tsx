'use client';

import { useLang } from '@/lib/i18n';

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-toggle">
      <button
        className={`lang-btn${lang === 'pt' ? ' active' : ''}`}
        onClick={() => setLang('pt')}
      >
        PT
      </button>
      <button
        className={`lang-btn${lang === 'en' ? ' active' : ''}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
}
