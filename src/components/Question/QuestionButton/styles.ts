import styled, { css } from 'styled-components'

interface ButtonProps {
  isLikeButton: boolean
  isLiked: boolean
}

const LikeButton = css`
  display: flex;
  align-items: flex-end;
  color: #737380;

  gap: 8px;
`

const LikedButton = css`
  color: #835afd;

  svg path {
    stroke: #835afd;
  }
`

export const Button = styled.button<ButtonProps>`
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8)
  }

  ${props => props.isLikeButton && LikeButton}
  ${props => (props.isLikeButton && props.isLiked) && LikedButton}
`