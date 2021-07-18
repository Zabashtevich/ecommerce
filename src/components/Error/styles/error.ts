import styled from "styled-components";

import { BsExclamationCircle } from "react-icons/bs";

export const Inner = styled.div`
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  padding: 120px 2rem;
  min-height: 70vh;
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  max-width: 1500px;
  display: flex;
  width: 100%;
`;

export const ErrorIcon = styled(BsExclamationCircle)`
  color: rgb(219, 225, 236);
  font-size: 6rem;
`;

export const Message = styled.span`
  text-align: center;
  margin-top: 2rem;
  font-size: 25px;
  color: #47494e;
`;

export const Link = styled.a`
  text-decoration: none;
  margin-top: 1rem;
  color: #7f828b;
`;
