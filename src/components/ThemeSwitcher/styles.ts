import styled from "styled-components";

export const Container = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;

  cursor: pointer;
  border: 0;
  background: ${props => props.theme.colors.white.background};
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`