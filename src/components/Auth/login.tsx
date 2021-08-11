import { useAuth0 } from "@auth0/auth0-react";
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
  const { loginWithRedirect, logout } = useAuth0();

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
          <Submit onClick={() => logout()}>ВОЙТИ</Submit>
        </Form>
        <Footer>
          <Subtitle>Войти через:</Subtitle>
          <SocialList onClick={loginWithRedirect}>
            <Social
              src="/api-logo/vk.svg"
              onClick={() => {
                const newWindow = window.open(
                  "https://oauth.vk.com/authorize?client_id=7900344&redirect_uri=http://localhost:3000/&response_type=token&display=popup&v=5.52",
                  "name",
                  "height=600,width=450",
                );
                newWindow!.focus();
                newWindow!.close();
              }}
            />
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
