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

export default function Info() {
  return (
    <Container>
      <Price>1 750 RUB</Price>

      <DeliveryInfo>
        (Доставка по миру - 550 RUB, по Украине - 50 UAH)
      </DeliveryInfo>

      <Description>
        <p>Тонкая. Легкая. Черная.</p>
        <p>
          Футболка линейки B.O.M.J - первая единица контрбрендовой линии одежды.
          Потрясающие качество в совместительстве с утонченным подходом к
          деталям, которым не могут похвастаться именитые раздутые фирмы.
        </p>
        <p>Ткань сорта пенье</p>
        <p>Состав: 95% cotton, 5% spandex. Плотность 170 г/м²</p>
      </Description>

      <Wrapper>
        <ModalButton>РАЗМЕРНАЯ СЕТКА</ModalButton>
        <ModalButton>УХОД ЗА ВЕЩЬЮ</ModalButton>
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
