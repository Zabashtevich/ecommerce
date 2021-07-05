import { FC } from "react";
import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

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
  Burger,
} from "./styles/navigation";
import { MobileNav } from "../";

const Navigation: FC = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

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
        <Burger onClick={() => setMobileNavVisible(true)} />
      </Buttons>
      <CSSTransition
        in={mobileNavVisible}
        timeout={500}
        mountOnEnter
        unmountOnExit
        appear={true}
      >
        <MobileNav setMobileNavVisible={setMobileNavVisible} />
      </CSSTransition>
    </Container>
  );
};

export default Navigation;
