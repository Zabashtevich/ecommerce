import { FC, useState } from "react";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

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
import { useLoginModal } from "@src/contexts";
import { useAppDispatch } from "@src/hooks/redux";
import { open } from "@src/redux/sidebar-slice";
import { useAppSelector } from "../../hooks/redux";
import { useRouter } from "next/dist/client/router";

const Navigation: FC = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const { setVisible: setLoginVisible } = useLoginModal();
  const { totalPrice } = useAppSelector((store) => store.sidebar);
  const { isAuthenticated } = useAuth0();
  const router = useRouter();

  const dispatch = useAppDispatch();

  return (
    <Container>
      <Navbar>
        <NavList>
          {NavigationCategories.map((item) => (
            <NavItem key={item.name}>
              <Link href={`/category/${item.category}`} passHref>
                <NavLink title={`go to ${item.category}`}>{item.name.toUpperCase()}</NavLink>
              </Link>
            </NavItem>
          ))}
          <NavItem key={"faq"}>
            <Link href={`/faq`} passHref>
              <NavLink title="go to faq page">FAQ</NavLink>
            </Link>
          </NavItem>
        </NavList>
      </Navbar>
      <Buttons>
        <Account
          onClick={() => {
            isAuthenticated ? setLoginVisible(true) : router.push("/account");
          }}
        />
        <Wrapper>
          <Card onClick={() => dispatch(open())} />
          <Price>{totalPrice.toLocaleString("ru")} RUB</Price>
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
