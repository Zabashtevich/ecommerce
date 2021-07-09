import { FC } from "react";

import {
  Container,
  Product,
  Thumbnail,
  Inner,
  Price,
  Button,
  Name,
} from "./styles/card";

const Card: FC = () => {
  return (
    <Container>
      <Product>
        <Thumbnail />
        <Inner>
          <Price>2 550 RUB</Price>
        </Inner>
      </Product>

      <Button>
        <Name></Name>
      </Button>
    </Container>
  );
};

export default Card;
