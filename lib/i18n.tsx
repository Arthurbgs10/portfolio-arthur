'use client';

import { createContext, useContext, useEffect, useState, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react';
import { siteMeta } from './content';

type Lang = 'pt' | 'en';

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void } | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = siteMeta.title[lang];
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LangProvider');
  return ctx;
}

type I18nOwnProps<T extends ElementType> = {
  as?: T;
  pt: string;
  en: string;
};

export function I18n<T extends ElementType = 'span'>({
  as,
  pt,
  en,
  ...rest
}: I18nOwnProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof I18nOwnProps<T>>) {
  const { lang } = useLang();
  const Tag = (as || 'span') as ElementType;
  return <Tag {...rest}>{lang === 'pt' ? pt : en}</Tag>;
}
