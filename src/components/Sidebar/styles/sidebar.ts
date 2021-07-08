import styled, { css } from "styled-components";

import { BsChevronLeft } from "react-icons/bs";

export const Outer = styled.div`
  justify-content: flex-end;
  position: fixed;
  display: flex;
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const Container = styled.aside`
  flex-direction: column;
  background-color: white;
  display: flex;
  z-index: 2000;
  height: 100vh;
  width: 380px;
  color: #000;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Continue = styled.button`
  background-color: white;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-basis: 110px;
  flex-shrink: 0;
  cursor: pointer;
  height: 110px;
  border: none;
  display: flex;

  ::after {
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    content: "";
    height: 5px;
    width: 100%;
    bottom: 0;
  }

  @media (max-width: 1600px) {
    flex-basis: 85px;

    ::after {
      height: 2px;
    }
  }
`;

export const Arrow = styled(BsChevronLeft)`
  font-size: 2.5rem;
`;

export const Subtitle = styled.span`
  margin-left: 1.5rem;
  font-size: 15px;
`;

export const Header = styled.header`
  border-bottom: 2px solid rgba(0, 0, 0, 1);
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const List = styled.ul`
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  display: flex;
  padding: 0;
  width: 100%;
`;

export const Title = styled.span`
  box-sizing: border-box;
  align-items: center;
  padding: 0 1rem;
  font-size: 38px;
  display: flex;
  height: 108px;
  width: 100%;

  ::after {
    background-color: rgba(0, 0, 0, 1);
    margin-left: 1rem;
    content: "";
    height: 2px;
    flex: 1;
  }
`;

export const Footer = styled.footer`
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  display: flex;
`;

export const Content = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  width: 305px;

  @media (max-width: 400px) {
    padding: 0 1rem;
    width: 100%;
  }
`;

export const Promocode = styled.div`
  border-bottom: 2px solid rgb(235, 238, 241);
  flex-direction: column;
  padding-bottom: 33px;
  margin-bottom: 33px;
  align-items: center;
  display: flex;
`;

export const PromocodeTitle = styled.span`
  color: rgb(129, 141, 146);
  align-self: flex-start;
  margin-bottom: 9px;
  font-weight: 400;
  font-size: 13px;
`;

export const PromocodeInner = styled.form`
  font-family: "Futura", sans-serif;
  align-items: center;
  display: flex;
  height: 36px;
  width: 100%;
`;

export const Input = styled.input`
  background-color: rgb(244, 246, 248);
  box-sizing: border-box;
  border-radius: 100px;
  padding-right: 51px;
  padding-left: 15px;
  font-size: 18px;
  outline: none;
  border: none;
  height: 100%;
  width: 204px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Apply = styled.button`
  background-color: rgb(0, 0, 0);
  border-radius: 100px;
  letter-spacing: 1px;
  margin-left: -36px;
  font-size: 13px;
  border: none;
  height: 100%;
  color: white;
  width: 137px;
`;

export const Details = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

export const Row = styled.div`
  justify-content: space-between;
  align-items: center;
  line-height: 22.5px;
  display: flex;

  :last-of-type {
    margin-top: 25px;
  }
`;

export const DetailsTitle = styled.span`
  color: rgb(129, 141, 146);
  font-size: 13px;
`;

interface IDetailsvalue {
  totalPrice?: boolean;
}

export const DetailsValue = styled.span<IDetailsvalue>`
  color: rgb(0, 0, 0);
  font-weight: 600;

  ${({ totalPrice }) =>
    totalPrice &&
    css`
      font-size: 25px;
    `};
`;

export const Checkout = styled.button`
  background-color: rgb(0, 0, 0);
  justify-content: center;
  border-radius: 100px;
  letter-spacing: 2px;
  align-items: center;
  margin-top: 45px;
  font-size: 15px;
  display: flex;
  width: 277px;
  height: 50px;
  color: white;
  border: none;
`;
