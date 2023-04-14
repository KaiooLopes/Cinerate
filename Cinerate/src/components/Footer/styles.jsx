import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${(props) => props.theme.optionD};
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
    a {
      color: #f3e62d;
    }
  }
`;
