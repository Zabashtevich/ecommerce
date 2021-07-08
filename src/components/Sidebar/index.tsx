import { FC } from "react";
import {
  Outer,
  Overlay,
  Container,
  Continue,
  Arrow,
  Subtitle,
  Header,
  List,
  Title,
  Footer,
  Content,
  Promocode,
  PromocodeTitle,
  PromocodeInner,
  Input,
  Apply,
  Details,
  Row,
  DetailsTitle,
  DetailsValue,
  Checkout,
} from "./styles/sidebar";

interface ISidebar {
  setVisible: (arg: boolean) => void;
  renderItem: (item: any) => JSX.Element;
  items: [1, 2, 3, 4];
}

const Sidebar: FC<ISidebar> = ({ setVisible, items, renderItem }) => {
  return (
    <Outer>
      <Overlay onClick={() => setVisible(false)} />
      <Container>
        <Continue onClick={() => setVisible(false)}>
          <Arrow />
          <Subtitle>ПРОДОЛЖИТЬ ПОКУПКИ</Subtitle>
        </Continue>
        <Header>
          <Title>Мои покупки</Title>
          <List>{items.map(renderItem)}</List>
        </Header>

        <Footer>
          <Content>
            <Promocode>
              <PromocodeTitle>ПРОМОКОД</PromocodeTitle>
              <PromocodeInner>
                <Input />
                <Apply>ПРИМЕНИТЬ</Apply>
              </PromocodeInner>
            </Promocode>

            <Details>
              <Row>
                <DetailsTitle>ОБЩАЯ СТОИМОСТЬ:</DetailsTitle>
                <DetailsValue>0 RUB</DetailsValue>
              </Row>

              <Row>
                <DetailsTitle>СТОИМОСТЬ ДОСТАВКИ:</DetailsTitle>
                <DetailsValue>0 RUB</DetailsValue>
              </Row>

              <Row>
                <DetailsTitle>ИТОГО:</DetailsTitle>
                <DetailsValue totalPrice={true}>0 RUB</DetailsValue>
              </Row>
            </Details>

            <Checkout>ОФОРМИТЬ ЗАКАЗ</Checkout>
          </Content>
        </Footer>
      </Container>
    </Outer>
  );
};

export default Sidebar;
