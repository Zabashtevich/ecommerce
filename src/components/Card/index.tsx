import { FC } from "react";

import { IProduct } from "@src/interfaces/product";
import {
  Container,
  Product,
  Thumbnail,
  Inner,
  Details,
  Price,
  Button,
  Name,
} from "./styles/card";

interface ICard {
  item: IProduct;
}

const Card: FC<ICard> = ({ item }) => {
  return (
    <Container>
      <Product>
        <Thumbnail src={item.images[0]} />
        <Inner>
          <Price>{Number(item.price).toLocaleString("ru")} RUB</Price>
        </Inner>
        <Details>ПОДРОБНЕЕ</Details>
      </Product>

      <Button>
        <Name>{item.name}</Name>
      </Button>
    </Container>
  );
};

export default Card;
