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
  top: 50%;
  left: 0;
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
  top: 50%;
  right: 0;
`;

export const Right = styled(BsFillCaretRightFill)``;

export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
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
`;
