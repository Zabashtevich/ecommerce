import { useCareContext, useSizeContext } from "@src/contexts";
import { AvailableSizes } from "@src/fixtures/sizes";
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
  increaseAmount: () => void;
  decreaseAmount: () => void;
  addPurchaseToSidebar: () => void;
  changeSize: (availableSize: string, price: number) => void;
  amount: number;
  size: string;
}

export default function Info({
  price: originPrice,
  description,
  increaseAmount,
  decreaseAmount,
  addPurchaseToSidebar,
  changeSize,
  amount,
  size,
}: InfoProps) {
  const [, setSizeVisible] = useSizeContext();
  const [, setCareVisible] = useCareContext();

  return (
    <Container>
      <Price>{Number(originPrice).toLocaleString("ru")} RUB</Price>

      <DeliveryInfo>(Доставка по миру - 550 RUB, по Украине - 50 UAH)</DeliveryInfo>

      <Description>
        {description.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </Description>

      <Wrapper>
        <ModalButton onClick={() => setCareVisible(true)}>РАЗМЕРНАЯ СЕТКА</ModalButton>
        <ModalButton onClick={() => setSizeVisible(true)}>УХОД ЗА ВЕЩЬЮ</ModalButton>
      </Wrapper>

      <Wrapper>
        <SizesInner>
          {AvailableSizes.map(({ size: availableSize, price }) => (
            <Size
              key={`${availableSize}`}
              selected={size === availableSize}
              onClick={() => changeSize(availableSize, price)}
            >
              {availableSize.toUpperCase()}
            </Size>
          ))}
        </SizesInner>
      </Wrapper>

      <Wrapper footerWrapper={true}>
        <AmountInner>
          <AmountMinus onClick={decreaseAmount}>-</AmountMinus>
          <AmountInput value={amount} readOnly />
          <AmountPlus onClick={increaseAmount}>+</AmountPlus>
        </AmountInner>

        <AddButton onClick={addPurchaseToSidebar}>ДОБАВИТЬ В КОРЗИНУ</AddButton>
      </Wrapper>
    </Container>
  );
}
