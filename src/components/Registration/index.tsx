import { FC } from "react";

import {
  Overlay,
  Container,
  Close,
  Header,
  Title,
  Form,
  Row,
  Label,
  Input,
  Submit,
  Arrow,
  Footer,
  Subtitle,
  SocialList,
  Google,
  Or,
  Login,
} from "./styles/registration";

const Registration: FC = () => {
  return (
    <>
      <Overlay />
      <Container>
        <Close />
        <Header>
          <Title>Регистрация</Title>
        </Header>
        <Form>
          <Row>
            <Label>ЭЛ.ПОЧТА</Label>
            <Input />
          </Row>
          <Row>
            <Label>ПАРОЛЬ</Label>
            <Input />
          </Row>
          <Row>
            <Label>ПОДТВЕРДИТЕ ПАРОЛЬ</Label>
            <Input />
          </Row>
          <Submit>
            ЗАРЕГИСТРИРОВАТЬСЯ
            <Arrow />
          </Submit>
        </Form>
        <Footer>
          <Subtitle>Зарегистрироваться через:</Subtitle>
          <SocialList>
            <Google />
          </SocialList>
          <Or>или</Or>
          <Login>ВОЙТИ</Login>
        </Footer>
      </Container>
    </>
  );
};

export default Registration;
