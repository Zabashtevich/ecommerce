import { FC } from "react";
import Link from "next/link";

import {
  Inner,
  Overlay,
  Container,
  Navigation,
  NavList,
  NavItem,
  NavLink,
} from "./styles/mobile-nav";
import { NavigationCategories } from "@src/fixtures/nav";

interface IMobileNav {
  setMobileNavVisible: (arg: boolean) => void;
}

const MobileNav: FC<IMobileNav> = ({ setMobileNavVisible }) => {
  return (
    <Inner>
      <Overlay onClick={() => setMobileNavVisible(false)} />
      <Container>
        <Navigation>
          <NavList>
            {NavigationCategories.map((item) => (
              <NavItem key={item.name}>
                <Link href={`/category/${item.category}`} passHref>
                  <NavLink>{item.name}</NavLink>
                </Link>
              </NavItem>
            ))}
          </NavList>
        </Navigation>
      </Container>
    </Inner>
  );
};

export default MobileNav;
