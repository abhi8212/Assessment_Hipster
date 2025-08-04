'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import clsx from 'clsx';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.current);

  const baseClasses = 'min-h-screen transition-all duration-500';

  if (theme === 'dark') {
    return (
      <div className={` bg-gray-900 text-white font-serif font-bold flex`}>
        <main className="">{children}</main>
      </div>
    );
  }
  // For other themes, no sidebar, just regular container
  return (
    <div
      className={clsx(baseClasses, {
        'bg-white text-black font-sans': theme === 'light',
        'bg-[#FDF6E3] text-[#586E75] font-pacifico p-6': theme === 'solarized',
      })}
    >
      {children}
    </div>
  );
}
