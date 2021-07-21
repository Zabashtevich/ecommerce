import { useModalsContext } from "@src/context";
import {
  Container,
  Price,
  DeliveryInfo,
  Description,
  Wrapper,
  ModalButton,
  SizesInner,
  Size,
  AmountInner,
  AmountMinus,
  AmountInput,
  AmountPlus,
  AddButton,
} from "./styles/info";

interface InfoProps {
  price: string;
  description: string[];
}

export default function Info({ price, description }: InfoProps) {
  const { setVisible } = useModalsContext();

  return (
    <Container>
      <Price>{Number(price).toLocaleString("ru")} RUB</Price>

      <DeliveryInfo>(Доставка по миру - 550 RUB, по Украине - 50 UAH)</DeliveryInfo>

      <Description>
        {description.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </Description>

      <Wrapper>
        <ModalButton>РАЗМЕРНАЯ СЕТКА</ModalButton>
        <ModalButton onClick={() => setVisible((prev) => ({ ...prev, careVisible: true }))}>УХОД ЗА ВЕЩЬЮ</ModalButton>
      </Wrapper>

      <Wrapper>
        <SizesInner>
          <Size>XS</Size>
          <Size>S</Size>
          <Size>M</Size>
          <Size>L</Size>
          <Size>XL</Size>
        </SizesInner>
      </Wrapper>

      <Wrapper footerWrapper={true}>
        <AmountInner>
          <AmountMinus>-</AmountMinus>
          <AmountInput value="1" />
          <AmountPlus>+</AmountPlus>
        </AmountInner>

        <AddButton>ДОБАВИТЬ В КОРЗИНУ</AddButton>
      </Wrapper>
    </Container>
  );
}
