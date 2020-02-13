import styled from "styled-components";
import { medGrey } from "./GlobalStyle";

export const Card = styled.div`
  padding: 20px;
  background-color: white;
  margin-top: 20px;
  box-shadow: 0px 3px 5px ${medGrey};
  box-sizing: boreder-box;
  ${({ height }) => height && `height: ${height}px`};
  @media (max-width: 1200px) {
    padding: 10px;
  }
`;
