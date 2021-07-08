import { FC } from "react";
import {
  Item,
  LinkWrapper,
  Thumbnail,
  Description,
  Title,
  Wrapper,
  Subtitle,
  Inner,
  Size,
  Amount,
  Plus,
  Minus,
  Price,
} from "./styles/purchases";

interface IPurchase {
  item: any;
}

const Purchases: FC<IPurchase> = () => {
  return (
    <Item>
      <LinkWrapper>
        <Thumbnail />
      </LinkWrapper>
      <Description>
        <Title>JOLY.POLO White</Title>
        <Wrapper>
          <Subtitle>Размер:</Subtitle>
          <Inner>
            <Size>XS</Size>
            <Size>S</Size>
            <Size>L</Size>
            <Size>XL</Size>
            <Size>2XL</Size>z
          </Inner>
        </Wrapper>
        <Wrapper>
          <Subtitle>Количество:</Subtitle>
          <Inner>
            <Amount>1</Amount>
            <Plus>+</Plus>
            <Minus>-</Minus>
          </Inner>
        </Wrapper>
        <Price>3 000 RUB</Price>
      </Description>
    </Item>
  );
};

export default Purchases;
