import { useState } from "react";

import { useModalsContext } from "@src/context";
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

export default function Info({ price: productPrice, description }: InfoProps) {
  const [{ size: purchaseSize, totalPrice }, setPurchaseDetais] = useState({
    size: "xs",
    totalPrice: productPrice,
  });
  const { setVisible } = useModalsContext();

  return (
    <Container>
      <Price>{Number(totalPrice).toLocaleString("ru")} RUB</Price>

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
          {AvailableSizes.map(({ size, price }) => (
            <Size
              key={size}
              selected={size === purchaseSize}
              onClick={() => setPurchaseDetais({ size, totalPrice: (price + Number(productPrice)).toString() })}
            >
              {size.toUpperCase()}
            </Size>
          ))}
        </SizesInner>
      </Wrapper>

      <Wrapper footerWrapper={true}>
        <AmountInner>
          <AmountMinus>-</AmountMinus>
          <AmountInput value="1" readOnly />
          <AmountPlus>+</AmountPlus>
        </AmountInner>

        <AddButton>ДОБАВИТЬ В КОРЗИНУ</AddButton>
      </Wrapper>
    </Container>
  );
}
