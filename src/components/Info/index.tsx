import { useState } from "react";

import { useModalsContext } from "@src/contexts";
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
}

export default function Info({ price: originPrice, description }: InfoProps) {
  const [price, setPrice] = useState(originPrice);
  const [size, setSize] = useState("xs");
  const [amount, setAmount] = useState(1);

  const { setVisible } = useModalsContext();

  function descreaseAmoune() {
    if (amount === 1) return;
    setAmount((prev) => --prev);
  }

  function increaseAmount() {
    if (amount === 20) return;
    setAmount((prev) => ++prev);
  }

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
        <ModalButton onClick={() => setVisible((prev) => ({ ...prev, sizeVisible: true }))}>
          РАЗМЕРНАЯ СЕТКА
        </ModalButton>
        <ModalButton onClick={() => setVisible((prev) => ({ ...prev, careVisible: true }))}>УХОД ЗА ВЕЩЬЮ</ModalButton>
      </Wrapper>

      <Wrapper>
        <SizesInner>
          {AvailableSizes.map(({ size: availableSize, price }) => (
            <Size
              key={availableSize}
              selected={size === availableSize}
              onClick={() => {
                setSize(availableSize);
                setPrice((Number(originPrice) + price).toString());
              }}
            >
              {availableSize.toUpperCase()}
            </Size>
          ))}
        </SizesInner>
      </Wrapper>

      <Wrapper footerWrapper={true}>
        <AmountInner>
          <AmountMinus onClick={descreaseAmoune}>-</AmountMinus>
          <AmountInput value={amount} readOnly />
          <AmountPlus onClick={increaseAmount}>+</AmountPlus>
        </AmountInner>

        <AddButton>ДОБАВИТЬ В КОРЗИНУ</AddButton>
      </Wrapper>
    </Container>
  );
}
