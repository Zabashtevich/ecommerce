import { FC } from "react";

import { useSignupModal } from "../../contexts";
import {
  Container,
  Overlay,
  Window,
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

interface ILogin {
  setVisible: (arg: boolean) => void;
}

const Login: FC<ILogin> = ({ setVisible }) => {
  const { setVisible: setSignupVisible } = useSignupModal();

  return (
    <Container>
      <Overlay onClick={() => setVisible(false)} />
      <Window type="login">
        <Form>
          <Row>
            <Label>ЭЛ.ПОЧТА</Label>
            <Input />
          </Row>
          <Row>
            <Label>ПАРОЛЬ</Label>
            <Input />
          </Row>
          <Submit>ВОЙТИ</Submit>
        </Form>
        <Footer>
          <Subtitle>Войти через:</Subtitle>
          <SocialList>
            <Social src="/api-logo/vk.svg" />
            <Social src="/api-logo/google.svg" />
          </SocialList>
          <Or>или</Or>
          <Redirect
            onClick={() => {
              setVisible(false);
              setSignupVisible(true);
            }}
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Redirect>
        </Footer>
      </Window>
    </Container>
  );
};

export default Login;
