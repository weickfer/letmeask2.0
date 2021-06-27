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

    padding: 0 32px;
    background: ${props => props.theme.colors.white.background};
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

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.black}
  }

  p {
    font-size: 14px;
    color: ${props => props.theme.colors.gray.dark};
    margin-top: 16px;

    a {
      color: ${props => props.theme.colors.pink.medium};
    }
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