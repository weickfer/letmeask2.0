import { ReactNode } from 'react'

import { ModalProvider } from './modal'
import { ToastProvider } from './toast'
import { AuthProvider } from './auth'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ModalProvider>
      <ToastProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ToastProvider>
    </ModalProvider>
  )
}