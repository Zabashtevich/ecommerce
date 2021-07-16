import styled from "styled-components";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  display: flex;
`;

export const Title = styled.h4`
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 26px;
  color: white;
  margin: 0;

  span {
    background-color: white;
    padding: 9px 15px;
    margin-left: 7px;
    color: #000;
  }
`;

export const Slider = styled.div`
  margin-top: 70px;
  display: flex;
`;

export const Button = styled.button`
  background-color: transparent;
  align-items: center;
  font-size: 2rem;
  display: flex;
  color: white;
  border: 0;
`;

export const LeftArrow = styled(BsChevronLeft)``;

export const Viewport = styled.div`
  position: relative;
  margin-top: 30px;
  overflow: hidden;
  height: 225px;
  width: 1125px;
`;

export const Inner = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
`;

export const Slide = styled.div`
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  width: 225px;

  :first-of-type {
    margin-left: 1rem;
  }
`;

export const Thumbnail = styled.img``;

export const Price = styled.span`
  background-color: white;
  padding: 0.4rem 0.7rem;
  border-radius: 100px;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 13px;
  display: block;
  color: #000;
`;

export const Subtitle = styled.span`
  letter-spacing: 1px;
  font-size: 13px;
`;

export const RightArrow = styled(BsChevronRight)``;
