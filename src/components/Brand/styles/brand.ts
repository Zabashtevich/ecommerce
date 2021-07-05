import styled from "styled-components";

export const Container = styled.section`
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  z-index: 1000;
  width: 100%;
  margin: 0;

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

  @media (max-width: 1600px) {
    justify-content: flex-start;
    ::after {
      display: none;
    }

    ::before {
      display: none;
    }
  }
`;

export const LinkWrapper = styled.a``;

export const Logo = styled.img`
  object-fit: cover;
  margin-top: 2rem;
  display: flex;

  @media (max-width: 1600px) {
    margin: 1.5rem;
    width: 100px;
  }
`;
