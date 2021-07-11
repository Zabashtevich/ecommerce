import styled from "styled-components";

export const Outer = styled.div`
  background-color: white;
  box-sizing: border-box;
  flex-direction: column;
  padding-bottom: 155px;
  align-items: center;
  padding-top: 35px;
  display: flex;
`;

export const Title = styled.h2`
  color: black;
`;

export const Inner = styled.div`
  margin-top: 70px;
  width: 1360px;

  @media (max-width: 1600px) {
    width: 85vw;
  }

  @media (max-width: 1280px) {
    width: 895px;
  }

  @media (max-width: 1030px) {
    width: 87.5vw;
  }

  @media (max-width: 770px) {
    width: 430px;
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const List = styled.div`
  margin: -35px -17.5px;
  flex-wrap: wrap;
  display: flex;
`;
