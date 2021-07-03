import {
  Container,
  Navbar,
  NavLink,
  Buttons,
  Account,
  Wrapper,
  Card,
  Price,
} from "./styles/navigation";

export default function Navigation() {
  return (
    <Container>
      <Navbar>
        <NavLink></NavLink>
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
}
