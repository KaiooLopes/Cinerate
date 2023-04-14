import styled from "styled-components";

export const Container = styled.div`
  cursor: ${(props) => (props.showLink ? "pointer" : "dafault")};
  width: 18%;
  min-width: 220px;
  transition: transform 0.4s;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding-bottom: 5px;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    background-color: ${(props) => props.theme.optionA};
  }

  &:hover {
    transform: scale(1.05);
  }

  h2 {
    font-weight: normal;
    font-size: 20px;
    text-align: center;
  }

  p {
    text-align: center;
  }
`;
