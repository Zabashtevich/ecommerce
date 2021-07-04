import styled from "styled-components";

import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

export const Container = styled.section`
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  display: flex;
  width: 100%;
`;

export const Navbar = styled.nav`
  justify-self: center;
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
  position: absolute;
  display: flex;
  right: 50px;
  top: 50%;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Account = styled(AiOutlineUser)`
  margin-right: 1rem;
  font-size: 1.7rem;
`;

export const Card = styled(FiShoppingCart)`
  margin-right: 1rem;
  font-size: 1.5rem;
`;

export const Price = styled.span`
  align-self: flex-end;
  display: flex;
`;
