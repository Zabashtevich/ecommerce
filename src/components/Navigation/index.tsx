import { FC } from "react";
import Link from "next/link";
import { useState } from "react";

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
import { MobileNavModal } from "@src/features";
import { useLoginModal, useCardModal } from "@src/contexts";

const Navigation: FC = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const { setVisible: setLoginVisible } = useLoginModal();
  const { setVisible: setCardVisible } = useCardModal();

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
        <Account onClick={() => setLoginVisible(true)} />
        <Wrapper onClick={() => setCardVisible(true)}>
          <Card />
          <Price>0 RUB</Price>
        </Wrapper>
        <Burger onClick={() => setMobileNavVisible(true)} />
      </Buttons>
      <MobileNavModal
        mobileNavVisible={mobileNavVisible}
        setMobileNavVisible={setMobileNavVisible}
      />
    </Container>
  );
};

export default Navigation;
