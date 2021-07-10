import styled from "styled-components";

export const Inner = styled.div`
  background-color: white;
  flex-direction: column;
  padding-bottom: 155px;
  align-items: center;
  padding-top: 50px;
  display: flex;
`;

export const Title = styled.h2`
  color: black;
`;

export const List = styled.div`
  justify-content: center;
  max-width: 1360px;
  flex-wrap: wrap;
  gap: 70px 20px;
  display: flex;
  width: 100%;

  @media (max-width: 1450px) {
    max-width: 85vw;
  }
`;
