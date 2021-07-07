import styled from "styled-components";

import { BsChevronLeft } from "react-icons/bs";

export const Inner = styled.div`
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
`;

export const Continue = styled.button`
  background-color: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 110px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
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
  align-items: center;
  display: flex;
  height: 150px;
`;

export const Title = styled.span`
  align-items: center;
  padding: 0 1rem;
  font-size: 38px;
  display: flex;
  width: 100%;

  ::after {
    background-color: rgba(0, 0, 0, 1);
    margin-left: 1rem;
    content: "";
    height: 2px;
    flex: 1;
  }
`;

export const PromoContainer = styled.div``;

export const PromoForm = styled.div``;

export const Input = styled.div``;

export const Confirm = styled.div``;

export const Description = styled.div``;

export const Row = styled.div``;

export const RowTitle = styled.div``;

export const RowValue = styled.div``;

export const Amount = styled.div``;

export const Checkout = styled.div``;
