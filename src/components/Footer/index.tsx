import { FC } from "react";

import {
  Container,
  Logo,
  Row,
  Subtitle,
  Subvalue,
  List,
  ListItem,
} from "./styles/footer";

const Footer: FC = () => {
  return (
    <Container>
      <Logo src="logo.png" />
      <Row>
        <Subtitle>ВРЕМЯ РАБОТЫ СЛУЖБЫ ПОДДЕРЖКИ:</Subtitle>
        <Subvalue>ПН-ПТ: 9:00 - 21:00</Subvalue>
      </Row>
      <Row>
        <Subtitle>E-MAIL:</Subtitle>
        <Subvalue>zabashevich@gmail.com</Subvalue>
      </Row>
      <Row>
        <Subtitle>ПРИНИМАЕМ К ОПЛАТЕ:</Subtitle>
        <List>
          <ListItem src="/pays/visa.png" />
          <ListItem src="/pays/mastercard.png" />
          <ListItem src="/pays/private.png" />
          <ListItem src="/pays/liqpay.png" />
        </List>
      </Row>
    </Container>
  );
};

export default Footer;
