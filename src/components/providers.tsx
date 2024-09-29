import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

function providers({children}: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}

export default providers;