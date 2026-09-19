'use client';
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
// Official shadcn/ui Next.js integration: class-based, system-aware, persisted by next-themes.
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
