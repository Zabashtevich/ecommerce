import { FC } from "react";

import { IPurchase } from "../../interfaces/product";
import { AvailableSizes } from "../../fixtures/sizes/index";
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
} from "./styles/sidebar-card";

interface ISidebarCard {
  item: IPurchase;
}

const SidebarCard: FC<ISidebarCard> = ({ item }) => {
  return (
    <Item>
      <LinkWrapper>
        <Thumbnail src={item.images[0]} />
      </LinkWrapper>
      <Description>
        <Title>{item.name}</Title>
        <Wrapper>
          <Subtitle>Размер:</Subtitle>
          <Inner>
            {AvailableSizes.map(({ size: availableSize }) => (
              <Size key={availableSize} selected={availableSize === item.size}>
                {availableSize}
              </Size>
            ))}
          </Inner>
        </Wrapper>
        <Wrapper>
          <Subtitle>Количество:</Subtitle>
          <Inner>
            <Amount value={item.amount} readOnly />
            <Plus>+</Plus>
            <Minus>-</Minus>
          </Inner>
        </Wrapper>
        <Price>3 000 RUB</Price>
      </Description>
    </Item>
  );
};

export default SidebarCard;
