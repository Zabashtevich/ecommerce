import { FC } from "react";

import {
  Window,
  Overlay,
  Container,
  Title,
  Form,
  Row,
  Label,
  Input,
  Submit,
  Footer,
  Subtitle,
  SocialList,
  Social,
  Or,
  Redirect,
} from "./styles/registration";

interface IRegistration {
  setVisible: (arg: boolean) => void;
}

const Registration: FC<IRegistration> = ({ setVisible }) => {
  return (
    <Container>
      <Overlay onClick={() => setVisible(false)} />
      <Window>
        <Title>Регистрация</Title>
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
          <Submit>ЗАРЕГИСТРИРОВАТЬСЯ</Submit>
        </Form>
        <Footer>
          <Subtitle>Зарегистрироваться через:</Subtitle>
          <SocialList>
            <Social src="/api-logo/vk.svg" />
            <Social src="/api-logo/google.svg" />
          </SocialList>
          <Or>или</Or>
          <Redirect>ВОЙТИ</Redirect>
        </Footer>
      </Window>
    </Container>
  );
};

export default Registration;
