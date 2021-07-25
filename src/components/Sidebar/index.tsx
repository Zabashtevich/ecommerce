import { FC } from "react";

import { IPurchase } from "../../interfaces/product";
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
  closeSidebar: () => void;
  renderItem: (item: any) => JSX.Element;
  items: IPurchase[];
}

const Sidebar: FC<ISidebar> = ({ closeSidebar, items, renderItem }) => {
  return (
    <Outer>
      <Overlay onClick={closeSidebar} />
      <Container>
        <Continue>
          <Arrow />
          <Subtitle onClick={closeSidebar}>ПРОДОЛЖИТЬ ПОКУПКИ</Subtitle>
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
