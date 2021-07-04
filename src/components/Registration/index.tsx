import { FC } from "react";

import {
  Window,
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

interface IRegistration {
  setVisible: (arg: boolean) => void;
}

const Registration: FC<IRegistration> = ({ setVisible }) => {
  return (
    <Container>
      <Overlay onClick={() => setVisible(false)} />
      <Window>
        <Close onClick={() => setVisible(false)} />
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
      </Window>
    </Container>
  );
};

export default Registration;
