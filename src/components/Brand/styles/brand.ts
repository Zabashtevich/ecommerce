import styled from "styled-components";

export const Container = styled.section`
  justify-content: center;
  position: relative;
  display: flex;
  width: 100%;

  &::before {
    background-color: white;
    position: absolute;
    content: "";
    height: 4px;
    width: 50%;
    bottom: 0;
    left: 0;
  }

  &::after {
    background-color: white;
    position: absolute;
    content: "";
    height: 4px;
    width: 45%;
    bottom: 0;
    right: 0;
  }
`;

export const LinkWrapper = styled.a``;

export const Logo = styled.img`
  margin-top: 3rem;
  display: flex;
`;
