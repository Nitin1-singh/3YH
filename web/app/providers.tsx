"use client"

import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { useState } from 'react'
import { RecoilRoot } from 'recoil'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {/* <ReactQueryDevtools /> */}
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </RecoilRoot>
    </QueryClientProvider >
  )
}