import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  column-gap: 2px;
  list-style: none;

  .selected {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  button {
    cursor: pointer;
    border: none;
    font-family: "Bebas Neue";
    font-size: 20px;
    padding: 3px 5px;
    background-color: transparent;
    color: ${(props) => props.theme.text};
  }

  button:disabled {
    color: gray;
    cursor: default;
  }

  @media (min-width: 350px) {
    button {
      font-size: 25px;
      padding: 3px 10px;
    }
  }
`;
