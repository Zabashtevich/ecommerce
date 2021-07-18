import styled from "styled-components";

export const Inner = styled.div`
  box-sizing: border-box;
  justify-content: center;
  background-color: white;
  padding: 120px 0;
  min-height: 85vh;
  display: flex;
  width: 100%;

  @media (max-width: 1550px) {
    padding: 120px 4rem;
  }

  @media (max-width: 800px) {
    padding: 120px 2rem;
  }
`;

export const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  color: #000;
`;
