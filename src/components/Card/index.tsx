import { FC } from "react";

import { IProduct } from "../../types/product";
import {
  Container,
  Product,
  Thumbnail,
  Inner,
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
        <Thumbnail src={item.view.main} />
        <Inner>
          <Price>{item.price.toLocaleString("ru")} RUB</Price>
        </Inner>
      </Product>

      <Button>
        <Name>{item.name}</Name>
      </Button>
    </Container>
  );
};

export default Card;
