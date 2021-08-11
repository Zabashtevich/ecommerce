import { FC } from "react";
import NextLink from "next/link";

import { IProduct } from "@src/interfaces/product";
import { Container, Product, Thumbnail, Inner, Details, Price, Button, Name } from "./styles/card";

interface ICard {
  item: IProduct;
  link: string;
}

const Card: FC<ICard> = ({ item, link }) => {
  return (
    <Container>
      <Product>
        <Thumbnail src={item.images[0]} />
        <Inner>
          <Price>{Number(item.price).toLocaleString("ru")} RUB</Price>
        </Inner>
        <NextLink href={link} passHref>
          <Details>ПОДРОБНЕЕ</Details>
        </NextLink>
      </Product>

      <Button>
        <Name>{item.name}</Name>
      </Button>
    </Container>
  );
};

export default Card;
