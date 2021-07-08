import styled from "styled-components";

import { BsPlus, BsDash } from "react-icons/bs";

export const Item = styled.li`
  align-items: center;
  margin-bottom: 22px;
  display: flex;
`;

export const LinkWrapper = styled.a`
  border: 1px solid #e2e7ec;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 11px;
  height: 144px;
  width: 120px;
`;

export const Thumbnail = styled.img`
  background-color: gray;
  height: 100%;
  width: 100%;
`;

export const Description = styled.div`
  flex-direction: column;
  margin-left: 20px;
  display: flex;
`;

export const Title = styled.span`
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
  line-height: 22px;
  display: flex;
`;

export const Size = styled.button`
  background-color: transparent;
  align-items: center;
  font-size: 13px;
  display: flex;
  border: none;
  margin: 3px;
  padding: 0;
`;

export const Amount = styled.span`
  border-right: 1px solid rgb(193, 193, 193);
  letter-spacing: 1px;
  padding-right: 12px;
  font-weight: 600;
  font-size: 15px;
`;

export const Plus = styled(BsPlus)`
  margin-left: 12px;
`;

export const Minus = styled(BsDash)`
  margin-left: 12px;
`;

export const Price = styled.span`
  letter-spacing: 1px;
  line-height: 24px;
  text-align: right;
  margin-top: 3px;
  font-size: 16px;
`;
