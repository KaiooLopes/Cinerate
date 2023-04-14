import styled from "styled-components";

import { tablet } from "../../assets/mobileFirst";

export const ContainerMovies = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  padding-bottom: 3em;

  section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
    justify-content: center;
  }
`;

export const HeaderSection = styled.div`
  @media (min-width: ${tablet + 8}px) {
    flex-direction: row;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
