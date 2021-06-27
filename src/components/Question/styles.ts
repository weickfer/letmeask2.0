import styled, { css } from 'styled-components'

interface ContainerProps {
  isHighlighted: boolean
  isAnswered: boolean
}

export const UserInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0 8px 0 0;
  }

  span {
    color: ${props => props.theme.colors.gray.dark};
    font-size: 14px;
  }
`

const ContainerHighLighted = css`
  background: ${props => props.theme.colors.white.secondary};
  border: 2px solid ${props => props.theme.colors.purple};

  footer ${UserInfo} span {
    color: ${props => props.theme.colors.black};
  }
`

const ContainerAnswered = css`
  background: ${props => props.theme.colors.gray.light};
`

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.white.other};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  margin: 5px 0;
  
  ${props => props.isHighlighted && ContainerHighLighted}
  ${props => props.isAnswered && ContainerAnswered}


  p {
    color: ${props => props.theme.colors.black};
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }
`
