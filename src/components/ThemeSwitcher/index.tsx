import { useContext, ButtonHTMLAttributes } from 'react'

import { ThemeContext } from 'styled-components'

import { FiSun, FiMoon } from 'react-icons/fi'

import { Container } from './styles'

interface ThemeSwictcherProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function ThemeSwictcher(buttonProps: ThemeSwictcherProps) {
  const { title } = useContext(ThemeContext)

  return (
    <Container {...buttonProps}>
      {
        title === 'light' ?
          <FiSun style={{ width: 46, height: 46, color: '#ff9000' }} /> :
          <FiMoon style={{ width: 46, height: 46, color: '#ff9000' }} />
      }
    </Container>
  )
}