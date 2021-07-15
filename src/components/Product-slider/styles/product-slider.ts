import styled from "styled-components";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  display: flex;
  flex: 1;
`;

export const Viewport = styled.div`
  position: relative;
  height: 640px;
  width: 580px;
`;

export const Slide = styled.img`
  object-fit: contain;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

export const PrevButton = styled.button`
  background-color: transparent;
  transform: translateY(-50%);
  position: absolute;
  font-size: 2rem;
  color: white;
  border: 0;
  top: 50%;
  left: 0;
`;

export const Left = styled(BsFillCaretLeftFill)``;

export const NextButton = styled.button`
  background-color: transparent;
  transform: translateY(-50%);
  position: absolute;
  font-size: 2rem;
  color: white;
  border: 0;
  top: 50%;
  right: 0;
`;

export const Right = styled(BsFillCaretRightFill)``;

export const Pagination = styled.div``;

export const Dot = styled.div`
  border: 2px solid white;
  position: relative;
  border-radius: 50%;
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
`;
