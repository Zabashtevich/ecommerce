import styled from "styled-components";

export const Inner = styled.div`
  position: fixed;
  z-index: 5000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Container = styled.section`
  background-color: white;
  position: absolute;
  padding-top: 2rem;
  display: flex;
  z-index: 3000;
  height: 100vh;
  width: 280px;
  right: 0;
  top: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
`;

export const NavList = styled.ul`
  flex-direction: column;
  display: flex;
  width: 100%;
  padding: 0;
`;

export const NavItem = styled.li`
  border-bottom: 1px solid #f3f3f3;
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 50px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: rgb(0, 0, 0);
  line-height: 22.5px;
  padding: 0 11px;
  font-size: 15px;
`;
