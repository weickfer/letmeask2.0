import styled, { css } from 'styled-components'

interface ButtonProps {
  isOutlined?: boolean
}

const ButtonOutlined = css`
  background: ${props => props.theme.colors.white.details};
  border: 1px solid ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.purple};
`

export const StyledButton = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  background: ${props => props.theme.colors.purple};
  color: ${props => props.theme.colors.white.details};
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;

  ${props => props.isOutlined && ButtonOutlined}

  img {
    margin-right: 8px;
  }

  transition: filter 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`