import { ReactNode } from 'react'

import logoImg from '../../assets/images/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Letmeask" />
        {children}
      </Content>
    </Container>
  )
}