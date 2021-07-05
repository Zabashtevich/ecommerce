import styled from "styled-components";

export const Header = styled.header`
  flex-direction: column;
  align-items: center;
  position: relative;
  display: flex;
  width: 100%;

  @media (max-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;

    ::after {
      border-bottom: 1px solid #616161;
      position: absolute;
      z-index: 100;
      content: "";
      width: 100%;
      top: 100%;
    }
  }
`;

export const Content = styled.div``;
