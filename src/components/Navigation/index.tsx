import { FC } from "react";
import Link from "next/link";

import { NavigationCategories } from "@src/fixtures/nav";
import {
  Container,
  Navbar,
  NavList,
  NavItem,
  NavLink,
  Buttons,
  Account,
  Wrapper,
  Card,
  Price,
} from "./styles/navigation";

const Navigation: FC = () => {
  return (
    <Container>
      <Navbar>
        <NavList>
          {NavigationCategories.map((item) => (
            <NavItem key={item.name}>
              <Link href={`/category/${item.category}`} passHref>
                <NavLink title={`go to ${item.category}`}>
                  {item.name.toUpperCase()}
                </NavLink>
              </Link>
            </NavItem>
          ))}
        </NavList>
      </Navbar>
      <Buttons>
        <Account />
        <Wrapper>
          <Card />
          <Price>0 RUB</Price>
        </Wrapper>
      </Buttons>
    </Container>
  );
};

export default Navigation;
