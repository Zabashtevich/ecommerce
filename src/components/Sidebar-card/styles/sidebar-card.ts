import styled, { css } from "styled-components";

import { BsPlus, BsDash } from "react-icons/bs";

export const Item = styled.li`
  align-items: center;
  margin-bottom: 22px;
  display: flex;
  width: 305px;
`;

export const LinkWrapper = styled.a`
  border: 1px solid #e2e7ec;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  padding: 11px;
  height: 144px;
  width: 120px;
`;

export const Thumbnail = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

export const Description = styled.div`
  flex-direction: column;
  margin-left: 20px;
  display: flex;
  flex: 1 1;
`;

export const Title = styled.span`
  white-space: pre-line;
  text-align: center;
  margin-bottom: 8px;
  line-height: 24px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
`;

export const Wrapper = styled.div`
  align-items: flex-start;
  flex-direction: column;
  display: flex;

  :nth-of-type(2) {
    margin-top: 3px;
  }
`;

export const Subtitle = styled.span`
  color: rgb(129, 141, 146);
  letter-spacing: 1px;
  line-height: 19px;
  font-size: 16px;
`;

export const Inner = styled.div`
  margin-top: 0.2rem;
  align-items: center;
  line-height: 22px;
  display: flex;
`;

interface ISize {
  selected?: boolean;
}

export const Size = styled.button<ISize>`
  background-color: transparent;
  text-transform: uppercase;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  border: none;
  margin: 3px;
  padding: 0;

  ${({ selected }) =>
    selected &&
    css`
      font-weight: bold;
    `};
`;

export const Amount = styled.input`
  border-right: 1px solid rgb(193, 193, 193);
  border: none;
  border-right: 1px solid rgba(0, 0, 0, 1);
  padding-right: 0.5rem;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  outline: none;
  width: 15px;
`;

export const Plus = styled(BsPlus)`
  margin-left: 10px;
  cursor: pointer;
  color: #000;
`;

export const Minus = styled(BsDash)`
  margin-left: 12px;
  cursor: pointer;
`;

export const Price = styled.span`
  letter-spacing: 1px;
  line-height: 24px;
  text-align: right;
  margin-top: 3px;
  font-size: 16px;
`;
