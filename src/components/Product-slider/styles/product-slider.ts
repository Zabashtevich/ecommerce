import styled from "styled-components";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 3rem;
  display: flex;
  flex: 1;
`;

export const Viewport = styled.div`
  position: relative;
  max-height: 650px;
  max-width: 550px;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    margin-top: 3rem;
    height: 500px;
    width: 400px;
  }

  @media (max-width: 600px) {
    height: 40vh;
    width: 90vw;
  }

  @media (max-width: 400px) {
    height: 30vh;
  }
`;

export const Slide = styled.img`
  object-fit: contain;
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const PrevButton = styled.button`
  background-color: transparent;
  transform: translateY(-50%);
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  height: 51px;
  color: white;
  width: 51px;
  z-index: 300;
  top: 50%;
  left: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Left = styled(BsFillCaretLeftFill)``;

export const NextButton = styled.button`
  background-color: transparent;
  transform: translateY(-50%);
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  height: 51px;
  color: white;
  width: 51px;
  z-index: 300;
  top: 50%;
  right: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Right = styled(BsFillCaretRightFill)``;

export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;

  @media (max-width: 600px) {
    align-items: center;
    gap: 0 20px;
  }
`;

export const Dot = styled.div`
  border: 2px solid white;
  position: relative;
  border-radius: 50%;
  margin-right: 1rem;
  height: 18px;
  width: 18px;

  ::after {
    transform: translate(-50%, -50%);
    background-color: white;
    position: absolute;
    border-radius: 50%;
    height: 10px;
    content: "";
    width: 10px;
    left: 50%;
    top: 50%;
  }

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

export const LeftMobileButton = styled.button`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  height: 35px;
  color: white;
  border: none;
  width: 35px;

  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const RightMobileButton = styled.button`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  height: 35px;
  color: white;
  border: none;
  width: 35px;

  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`;
