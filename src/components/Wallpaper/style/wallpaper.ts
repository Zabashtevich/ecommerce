import styled, { css } from "styled-components";

export const Container = styled.section`
  margin-top: -172px;
  position: relative;
  z-index: 0;
`;

export const Thumbnail = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  transform: translateX(-50%);
  position: absolute;
  display: flex;
  gap: 20px;
  left: 50%;
  top: 95%;
`;

type ButtonProps = {
  selected: boolean;
};

export const LeftToggler = styled.button<ButtonProps>`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  border: none;
  width: 100px;
  height: 3px;

  ${({ selected }) =>
    selected &&
    css`
      background-color: white;
    `};
`;

export const RightToggler = styled.button<ButtonProps>`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  border: none;
  width: 100px;
  height: 3px;

  ${({ selected }) =>
    selected &&
    css`
      background-color: white;
    `};
`;
