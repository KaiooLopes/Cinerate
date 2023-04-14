import styled from "styled-components";

import { desktop } from "../../assets/mobileFirst";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
    width: 90%;
    max-width: 450px;
    row-gap: 1.5em;
    img {
      width: 100%;
    }
  }

  @media (min-width: ${desktop}px) {
    section {
      flex-direction: row;
      max-width: none;
      align-items: flex-start;
      column-gap: 2em;

      img {
        max-width: 250px;
      }
    }
  }
`;

export const MovieDetail = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  flex-direction: column;
  row-gap: 1.5em;
  width: 100%;

  h1 {
    font-size: 35px;
  }

  p {
    font-size: 20px;
    line-height: 1.5em;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    div {
      h4 {
        font-size: 22px;
      }

      row-gap: 0;
      column-gap: 0;
      display: flex;
      width: 45%;
      flex-direction: column;
      align-items: space-evenly;
    }
  }

  @media (min-width: ${desktop}px) {
    div {
      flex-direction: row;
    }
  }
`;
