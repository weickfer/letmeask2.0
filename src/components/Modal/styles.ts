import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(41, 41, 46, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  transition: top 1s;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.white.details};
  width: 100%;
  max-width: 590px;
  height: 400px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 64px 20px;

  header svg {
    width: 48px;
    height: 48px;
    
    path {
      stroke: #E95671;
    }
  }

  main {
    margin-top: 18px;
    text-align: center;

    h1 {
      font: 700 24px 'Poppins', sans-serif;
      color: ${props => props.theme.colors.black}
    }
    
    p {
      margin-top: 18px;
      font: 500 16px 'Roboto', sans-serif;
      color: ${props => props.theme.colors.gray.dark};
    }
  }

  footer {
    display: flex;
    align-self: center;
    margin-top: auto;
    gap: 15px
  }
`