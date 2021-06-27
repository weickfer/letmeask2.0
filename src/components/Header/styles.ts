import styled from "styled-components";

export const Container = styled.header`
  padding: 24px;
  background: ${props => props.theme.colors.white.background};
  border-bottom: 1px solid ${props => props.theme.colors.gray.other};
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }
`