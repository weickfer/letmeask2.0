import {
  createContext,
  useContext,
  ReactNode,
  useCallback,
} from 'react'
import toast, { Toaster, ToastOptions } from 'react-hot-toast'

export type ToastMessage = {
  type: 'success' | 'error' | 'warn'
  title: string
}

type ToastContextData = {
  addToast(message: ToastMessage, options?: Omit<ToastOptions, 'icon'>): void
  addHtmlToast(): void
}

const ToastContext = createContext({} as ToastContextData)

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {

  const addToast = useCallback((
    message: ToastMessage,
    options?: Omit<ToastOptions, 'icon'>
  ) => {
    if (message.type === 'warn') {
      toast(message.title, {
        icon: '⚠️',
        ...options
      })
    } else {
      toast[message.type](message.title, options)
    }
  }, [])

  const addHtmlToast = useCallback(() => {
    toast(t => (
      <span>
        Encontramos uma sala com este id. <br /> <a href="">clique aqui para entrar.</a>
      </span>
    ))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, addHtmlToast }}>
      {children}
      <Toaster position="bottom-left" />
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within an ToastProvider.')
  }

  return context
}