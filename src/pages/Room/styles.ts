import styled from "styled-components";

export const Container = styled.div`
  main {
    max-width: 800px;
    margin: 0 auto;
  }
`

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: ${props => props.theme.colors.black};
  }

  span {
    margin-left: 16px;
    background: ${props => props.theme.colors.pink.dark};
    border-radius: 9999px;
    padding: 8px 16px;
    color: ${props => props.theme.colors.white.details};
    font-weight: 500;
    font-size: 14px;
  }
`

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: ${props => props.theme.colors.white.other};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }
`

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;  

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.gray.dark};

    button {
      background: transparent;
      border: 0;
      color: ${props => props.theme.colors.purple};
      font-size: 14px;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`

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
    color: ${props => props.theme.colors.black};
    font-weight: 500;
    font-size: 14px;
  }
`

export const QuestionList = styled.div`
  margin-top: 32px;
`