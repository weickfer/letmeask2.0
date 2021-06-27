import { ReactNode, ButtonHTMLAttributes } from "react";

import { Button } from './styles'

interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string
  labelColor: string
  children: ReactNode
}

export function ModalButton({
  children,
  background,
  labelColor,
  ...buttonProps
}: ModalButtonProps) {
  return (
    <Button
      background={background}
      labelColor={labelColor}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}