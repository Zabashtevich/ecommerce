import { FC } from "react";

import { IPurchase } from "../../interfaces/product";
import { AvailableSizes } from "../../fixtures/sizes/index";
import { useAppDispatch } from "../../hooks/redux";
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
import { changeSize, decrease, increase, remove } from "@src/redux/sidebar-slice";

interface ISidebarCard {
  item: IPurchase;
}

const SidebarCard: FC<ISidebarCard> = ({ item }) => {
  const dispatch = useAppDispatch();

  function increaseAmount() {
    if (item.amount === 20) return;
    dispatch(increase({ id: item.id }));
  }

  function decreaseAmount() {
    if (item.amount === 1) return dispatch(remove({ id: item.id }));
    dispatch(decrease({ id: item.id }));
  }

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
              <Size
                key={availableSize}
                selected={availableSize === item.size}
                onClick={() => dispatch(changeSize({ id: item.id, size: availableSize }))}
              >
                {availableSize}
              </Size>
            ))}
          </Inner>
        </Wrapper>
        <Wrapper>
          <Subtitle>Количество:</Subtitle>
          <Inner>
            <Amount value={item.amount} readOnly />
            <Plus onClick={increaseAmount}>+</Plus>
            <Minus onClick={decreaseAmount}>-</Minus>
          </Inner>
        </Wrapper>
        <Price>{item.amount * Number(item.price)}</Price>
      </Description>
    </Item>
  );
};

export default SidebarCard;
