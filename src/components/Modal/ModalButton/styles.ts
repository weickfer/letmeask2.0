import styled from "styled-components";

interface ButtonProps {
  background: string
  labelColor: string
}

export const Button = styled.button<ButtonProps>`
  border: 0;
  border-radius: 8px;
  background: transparent;
  width: 134px;
  height: 50px;
  background-color: ${props => props.background};
  font: 400 16px 'Roboto', sans-serif;
  color: ${props => props.labelColor};

  transition: filter 0.2s;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`