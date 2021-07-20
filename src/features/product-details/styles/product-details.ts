import styled from "styled-components";

export const Inner = styled.section`
  flex-direction: column;
  padding-bottom: 100px;
  align-items: center;
  padding-top: 25px;
  display: flex;

  @media (max-width: 1500px) {
    padding: 25px 50px 100px;
  }
`;

export const Title = styled.h2`
  letter-spacing: 1px;
  font-size: 37px;

  @media (max-width: 1024px) {
    text-align: center;
    margin: 0;
  }

  @media (max-width: 600px) {
    font-size: 6vw;
  }
`;

export const Container = styled.div`
  max-width: 1500px;
  margin-top: 50px;
  display: flex;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;
