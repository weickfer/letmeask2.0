import { ReactNode, ButtonHTMLAttributes } from "react";

import { Button } from './styles'

interface QuestionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLikeButton?: boolean
  isLiked?: boolean
  children: ReactNode
}

export function QuestionButton({
  children,
  isLikeButton = false,
  isLiked = false,
  ...buttonProps
}: QuestionButtonProps) {
  return (
    <Button
      isLikeButton={isLikeButton}
      isLiked={isLiked}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}