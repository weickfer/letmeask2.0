import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 6;
  
    background: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.white.details};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;
  
    img {
      max-width: 320px;
    }
  
    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: ${props => props.theme.colors.white.background};
    }
  }

  main {
    flex: 8;
    background: ${props => props.theme.colors.white.background};
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }
`

export const Form = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: ${props => props.theme.colors.white.details};
    border: 1px solid ${props => props.theme.colors.gray.medium};
  }

  button {
    margin-top: 16px;
  }

  button, input {
    width: 100%;
  }
`

export const CreateRoomButton = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white.details};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;

  img {
    margin-right: 8px;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Separator = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.gray.medium};

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.gray.medium};
    margin-left: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.gray.medium};
    margin-right: 16px;
  }
`