import { FC } from "react";
import {
  Inner,
  Overlay,
  Container,
  Continue,
  Arrow,
  Subtitle,
  Header,
  Title,
  PromoContainer,
  PromoForm,
  Input,
  Confirm,
  Description,
  Row,
  RowTitle,
  RowValue,
  Amount,
  Checkout,
} from "./styles/card";

interface ICard {
  setVisible: (arg: boolean) => void;
}

const Card: FC<ICard> = ({ setVisible }) => {
  return (
    <Inner>
      <Overlay onClick={() => setVisible(false)} />
      <Container>
        <Continue onClick={() => setVisible(false)}>
          <Arrow />
          <Subtitle>ПРОДОЛЖИТЬ ПОКУПКИ</Subtitle>
        </Continue>
        <Header>
          <Title>Мои покупки</Title>
        </Header>
        <PromoContainer>
          <Subtitle></Subtitle>
          <PromoForm>
            <Input />
            <Confirm />
          </PromoForm>
        </PromoContainer>
        <Description>
          <Row>
            <RowTitle>ОБЩАЯ СТОИМОСТЬ:</RowTitle>
            <RowValue>0 RUB</RowValue>
          </Row>
          <Row>
            <RowTitle>СТОИМОСТЬ ДОСТАВКИ:</RowTitle>
            <RowValue>0 RUB</RowValue>
          </Row>
          <Row>
            <RowTitle></RowTitle>
            <Amount></Amount>
          </Row>

          <Checkout />
        </Description>
      </Container>
    </Inner>
  );
};

export default Card;
