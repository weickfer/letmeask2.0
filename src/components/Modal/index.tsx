import { useState } from 'react'
import { ForwardRefRenderFunction, useImperativeHandle, forwardRef } from 'react'

import closeImg from '../../assets/images/close.svg'
import deleteImg from '../../assets/images/delete.svg'

import { ModalButton } from './ModalButton'

import { Overlay, Container } from './styles'

type IButton = {
  label: string
  colors: {
    background: string
    labelColor: string
  },
  onClick: () => void
}

interface ModelRef {
  setButtons(data: IButton[]): void
  openModal(): void
  closeModal(): void
}

interface ModalProps {
  icon: 'trash' | 'close'
  title: string
  description: string
}

const ModalComponent: ForwardRefRenderFunction<ModelRef, ModalProps> = ({
  icon, title, description
}, ref) => {
  const [isOpened, setIsOpened] = useState(false)
  const [buttons, setButtons] = useState<IButton[]>([])

  useImperativeHandle(ref, () => ({
    setButtons: (buttons) => {
      setButtons(buttons)
    },
    openModal: handleOpenModal,
    closeModal: handleCloseModal
  }))

  const handleOpenModal = () => {
    setIsOpened(true)
  }

  const handleCloseModal = () => {
    setIsOpened(false)
  }

  return (
    <Overlay style={{ top: isOpened ? '0' : '300vh' }}>
      <Container>
        <header>
          {
            icon === "trash" ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5.99988H5H21" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            ) : (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.66 18.3398L18.34 29.6598" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29.66 29.6598L18.34 18.3398" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24V24C42 33.942 33.942 42 24 42Z" stroke="#E73F5D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            )
          }
        </header>
        <main>
          <h1>{title}</h1>
          <p>{description}</p>
        </main>
        <footer>
          {
            buttons.map(button => (
              <ModalButton
                labelColor={button.colors.labelColor}
                background={button.colors.background}
                onClick={button.onClick}
              >{button.label}</ModalButton>
            ))
          }
          {/* <ModalButton
            labelColor={"#737380"}
            background={"#DBDCDD"}
          >Cancelar</ModalButton>
          <ModalButton
            labelColor={"#FEFEFE"}
            background={"#E73F5D"}
          >Sim, encerrar</ModalButton> */}
        </footer>
      </Container>
    </Overlay>
  )
}

const Modal = forwardRef(ModalComponent)

export { Modal }