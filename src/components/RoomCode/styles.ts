import styled from "styled-components";

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${props => props.theme.colors.white.details};
  border: 1px solid ${props => props.theme.colors.purple};
  cursor: pointer;

  display: flex;

  div {
    height: 100%;
    background: ${props => props.theme.colors.purple};
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 230px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
  }
`