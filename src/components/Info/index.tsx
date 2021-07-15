import {
  Outer,
  Container,
  Price,
  DeliveryInfo,
  Description,
  Wrapper,
  ModalButton,
  Inner,
  AmountInner,
  AmountMinus,
  AmountInput,
  AmountPlus,
  AddButton,
} from "./styles/info";

export default function Info() {
  return (
    <Outer>
      <Container>
        <Price></Price>

        <DeliveryInfo></DeliveryInfo>

        <Description></Description>

        <Wrapper>
          <ModalButton></ModalButton>
          <ModalButton></ModalButton>
        </Wrapper>

        <Inner>
          <AmountInner>
            <AmountMinus></AmountMinus>
            <AmountInput />
            <AmountPlus></AmountPlus>
          </AmountInner>

          <AddButton></AddButton>
        </Inner>
      </Container>
    </Outer>
  );
}
