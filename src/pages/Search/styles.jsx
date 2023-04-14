import styled from "styled-components";

import { ContainerMovies } from "../Home/styles";

export const Container = styled(ContainerMovies)``;

export const NoMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  svg {
    font-size: 50px;
  }

  h3 {
    font-size: 24px;
  }
`;
