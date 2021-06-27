import {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useCallback,
} from 'react'

import { Modal } from '../components/Modal'

type IButton = {
  label: string
  colors: {
    background: string
    labelColor: string
  },
  onClick: () => void
}

type ModalContextData = {
  openModal(): void
  closeModal(): void
  setData(data: {
    icon: 'trash' | 'close'
    title: string,
    description: string,
    buttons: IButton[]
  }): void
}

const ModalContext = createContext({} as ModalContextData)

interface ModalProviderProps {
  children: ReactNode
}

interface ModelRef {
  setButtons(data: IButton[]): void
  openModal(): void
  closeModal(): void
}

export function ModalProvider({ children }: ModalProviderProps) {
  const modalRef = useRef<ModelRef>(null)
  const [icon, setIcon] = useState<'trash' | 'close'>('trash')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const openModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [modalRef])

  const closeModal = useCallback(() => {
    modalRef.current?.closeModal()
  }, [modalRef])

  const setData = useCallback((data: {
    icon: 'trash' | 'close'
    title: string,
    description: string,
    buttons: IButton[]
  }) => {
    setIcon(data.icon)
    setTitle(data.title)
    setDescription(data.description)
    modalRef.current?.setButtons(data.buttons)
  }, [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal, setData }}>
      {children}
      <Modal
        ref={modalRef}
        icon={icon}
        title={title}
        description={description}
      />
    </ModalContext.Provider>
  )
}

export const useModal = (): ModalContextData => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider.')
  }

  return context
}