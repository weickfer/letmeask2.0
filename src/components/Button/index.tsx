import { ButtonHTMLAttributes } from 'react'

import { StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOutlined?: boolean
}

export function Button({ isOutlined = false, ...buttonProps }: ButtonProps) {
  return (
    <StyledButton
      isOutlined={isOutlined}
      {...buttonProps}
    />
  )
}