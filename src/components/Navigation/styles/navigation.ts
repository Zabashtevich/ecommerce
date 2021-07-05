import styled from "styled-components";

import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BsList } from "react-icons/bs";

export const Container = styled.section`
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  z-index: 1000;
  display: flex;
  width: 100%;

  @media (max-width: 1600px) {
    justify-content: flex-end;
    align-items: center;
    margin-top: 0;
  }
`;

export const Navbar = styled.nav`
  justify-self: center;

  @media (max-width: 1600px) {
    justify-content: space-between;
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 20px;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.nav};
  letter-spacing: 1.05px;
  text-decoration: none;
  position: relative;
  color: inherit;
  display: flex;

  ::after {
    transform: translateX(-50%);
    background-color: white;
    position: absolute;
    height: 1px;
    content: "";
    top: 120%;
    left: 50%;
    width: 0;
  }

  :hover {
    ::after {
      transition: 400ms;
      width: 100%;
    }
  }
`;

export const Buttons = styled.div`
  transform: translateY(-50%);
  align-items: center;
  position: absolute;
  display: flex;
  right: 4vw;
  top: 50%;

  @media (max-width: 1600px) {
    right: 5%;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Account = styled(AiOutlineUser)`
  margin-right: 1rem;
  font-size: 1.7rem;
  cursor: pointer;

  @media (max-width: 1600px) {
    margin: 0 1rem;
  }
`;

export const Card = styled(FiShoppingCart)`
  margin-right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 1600px) {
    margin: 0 1rem;
  }
`;

export const Price = styled.span`
  align-self: flex-end;
  display: flex;

  @media (max-width: 1600px) {
    display: none;
  }
`;

export const Burger = styled(BsList)`
  font-size: 2rem;
  margin: 0 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 1600px) {
    margin: 0 1rem;
    display: block;
  }
`;
