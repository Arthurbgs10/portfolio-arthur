'use client';

import type { ReactNode } from 'react';
import { useLang } from '@/lib/i18n';
import { resume } from '@/lib/content';

// Points at the resume PDF for the active language. `download` saves the file;
// target="_blank" opens it in a new tab where downloads are blocked.
export function ResumeLink({ className, children }: { className?: string; children: ReactNode }) {
  const { lang } = useLang();
  return (
    <a className={className} href={resume[lang]} download target="_blank" rel="noopener">
      {children}
    </a>
  );
}
