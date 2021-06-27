import { ReactNode } from 'react'

import { Container, UserInfo } from './styles'

interface QuestionProps {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isHighlighted?: boolean
  isAnswered?: boolean
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false
}: QuestionProps) {
  return (
    <Container
      isAnswered={isAnswered}
      isHighlighted={isHighlighted}
    >
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>
          {children}
        </div>
      </footer>
    </Container>
  )
}