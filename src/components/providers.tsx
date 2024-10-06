"use client";
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from 'next/navigation';
import React from 'react';


function providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push} className='w-full h-full flex flex-col'>
      <NextThemesProvider attribute="class">
          {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default providers;